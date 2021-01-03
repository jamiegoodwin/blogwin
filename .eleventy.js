module.exports = (config) => {
  config.addCollection("posts", (collection) => {
    return [...collection.getFilteredByGlob("./_src/posts/*.md")].reverse();
  });

  return {
    dir: {
      output: "_dist",
    },
  };
};
