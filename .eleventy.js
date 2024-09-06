module.exports = function(eleventyConfig) {
  // Passthrough for static assets like styles.css
  eleventyConfig.addPassthroughCopy("styles.css");

  // Add a collection for blog posts, sorted by date (latest first)
  eleventyConfig.addCollection("blogPosts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("_pages/blog/*.md")
      .sort((a, b) => b.date - a.date);
  });

  return {
    dir: {
      input: "_pages",
      includes: "../_includes",
      layouts: "../_layouts",
      output: "_site"
    }
  };
};