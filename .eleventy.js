const htmlmin = require("html-minifier");
const Image = require("@11ty/eleventy-img");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const markdownIt = require("@gerhobbelt/markdown-it");
const markdownItClass = require("markdown-it-class");
const nunjucks = require("nunjucks");
const pluginTailwindCSS = require("eleventy-plugin-tailwindcss");
const posthtml = require("posthtml");
const uglify = require("posthtml-minify-classnames");
require("dotenv").config();

// Environment variables in Nunjucks
nunjucks.configure("views", {}).addGlobal("CFWA_TOKEN", process.env.CFWA_TOKEN);

// eleventy input and output dirs
const inputDir = "_src/assets";
const outputDir = "_dist";

// markdown-it-class mapping
//const mapping = require("./_src/assets/styles/markdown.js");
const mapping = {
  h1: ["text-3xl", "text-red-400", "font-bold", "mb-4", "mt-6"],
  h2: ["text-2xl", "text-red-400", "font-bold", "mb-4", "mt-6"],
  h3: ["text-1xl", "text-red-400", "font-bold", "mb-4", "mt-6"],
  h4: ["text-xl", "text-red-400", "font-bold", "mb-4", "mt-6"],
  a: [
    "border-b",
    "border-red-500",
    "dark:border-red-400",
    "inline-block",
    "pb-0.5",
    "transition",
    "hover:border-red-800",
    "dark:hover:border-red-100",
  ],
  p: ["my-2"],
  blockquote: ["border-l-4", "border-red-400", "pl-6", "my-6"],
  code: [
    "align-middle",
    "bg-gray-800",
    "text-gray-100",
    "dark:bg-gray-200",
    "dark:text-gray-700",
    "inline-block",
    "p-0.5",
    "px-2",
    "rounded",
    "shadow-sm",
    "max-w-full",
    "overflow-auto",
  ],
  ol: ["list-outside", "list-decimal", "pl-5"],
  ul: ["list-outside", "list-disc", "pl-5"],
  li: ["mb-1"],
  strong: ["font-bold"],
};

// enable markdown-it formatting
const md = markdownIt({ linkify: true, html: true, typographer: true });
// tell markdown-it to use markdown-it-class plugin
md.use(markdownItClass, mapping);

module.exports = (config) => {
  // create a posts collection from all markdown files in posts directory
  config.addCollection("posts", (collection) => {
    return [...collection.getFilteredByGlob("./_src/posts/*.md")].reverse();
  });

  // enable tailwind
  config.addPlugin(pluginTailwindCSS, {
    src: "_src/assets/styles/my.css",
  });

  // markdown-it, classnames and responsive images
  config.setLibrary("md", md);

  // responsive images
  config.addTransform("responsiveimg", async (content, outputPath) => {
    // eleventy-image function
    async function eleventyImg(image) {
      // get the `src` and `alt` of the image element
      let src = image.getAttribute("src");

      if (src === undefined) {
        // no src = no chance
        throw new Error(`Missing \`src\` in eleventyImg!`);
      }

      if (src.slice(0, 1) === "/") {
        // correct directory for local images
        src = `${__dirname}/${inputDir}${src}`;
      }

      // run image through elevnty-img
      // let metadata = await Image(src, {
      //   widths: [600],
      //   formats: ["jpeg"],
      // });

      // let data = metadata.jpeg[metadata.jpeg.length - 1];

      // replace image details with new image details
      image.setAttribute("loading", "lazy");
      image.setAttribute("decoding", "async");
      // image.setAttribute("width", data.width);
      // image.setAttribute("height", data.height);
      // image.setAttribute("src", data.src);

      // send the image back
      return image;
    }

    // only apply transforms if the output is html (not xml or css or something)
    if (outputPath.endsWith(".html")) {
      // feed the content into jsdom
      const dom = new JSDOM(content);
      const document = dom.window.document;

      // find the image elements via `queryselectorall`, replace this selector with your own custom one
      const imageElems = document.querySelectorAll("img");

      // no images? crack on
      if (imageElems.length === 0) {
        return content;
      }

      // images? let's responsivise them
      imageElems.forEach(image => {
        image.setAttribute("src", null);
        //image = eleventyImg(image);
      });

      return `<!DOCTYPE html> ${document.documentElement.outerHTML}`;
    }

    return content;
  });

  // minify html and uglify classnames
  // TODO production only
  config.addTransform("htmlmin", async (content, outputPath) => {
    if (outputPath.endsWith(".html")) {
      const { html } = await posthtml().use(uglify()).process(content);

      let minified = htmlmin.minify(html, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });

      return minified;
    }

    return content;
  });

  // set output dir
  return {
    dir: {
      input: inputDir,
      output: outputDir,
    },
  };
};
