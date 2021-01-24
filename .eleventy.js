const pluginTailwindCSS = require("eleventy-plugin-tailwindcss");
const markdownIt = require("markdown-it");
const markdownItClass = require("markdown-it-class");
const htmlmin = require("html-minifier");
const posthtml = require("posthtml");
const uglify = require("posthtml-minify-classnames");

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

const md = markdownIt({ linkify: true, html: true });
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

  // markdown-it-class
  config.setLibrary("md", md);

  // minify html and uglify classnames
  config.addTransform("htmlmin", async (content, outputPath) => {
    if(outputPath.endsWith(".html")) {
      const {html} = await posthtml().use(uglify()).process(content);

      let minified = htmlmin.minify(html, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });

      return minified;
    }

    return content;
  });

  // passthrough images
  config.addPassthroughCopy("assets/images/uploads");

  // set output dir
  return {
    dir: {
      output: "_dist",
    },
  };
};