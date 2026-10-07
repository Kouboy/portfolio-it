module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("atelier.css");
  eleventyConfig.addPassthroughCopy("rrt4-safe.js");
  eleventyConfig.addPassthroughCopy("page-transition.js");
  eleventyConfig.addPassthroughCopy("motion.js");
  eleventyConfig.addPassthroughCopy("system.html");
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addFilter("pad2", value => String(value).padStart(2, "0"));

  eleventyConfig.addCollection("project", collectionApi => {
    return collectionApi.getFilteredByTag("project").sort((a,b) => (a.data.order || 0) - (b.data.order || 0));
  });

  return { dir: { input: "src", includes: "_includes", data: "_data", output: "_site" } };
};
