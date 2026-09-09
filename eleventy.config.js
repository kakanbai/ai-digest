export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ public: "." });

  eleventyConfig.addCollection("digests", (collectionApi) =>
    collectionApi
      .getFilteredByGlob("./content/**/*.md")
      .sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addFilter("readableDate", (date) => {
    const value = date instanceof Date ? date : new Date(date);
    return new Intl.DateTimeFormat("zh-CN", {
      timeZone: "Asia/Shanghai",
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).format(value);
  });

  eleventyConfig.addFilter("typeLabel", (type) => ({
    ai: "AI / Coding",
    market: "市场情报",
    github: "GitHub 热点",
    research: "专题研究",
    weekly: "每周深度"
  })[type] || type || "未分类");

  eleventyConfig.addFilter("limit", (items, count) =>
    Array.isArray(items) ? items.slice(0, count) : []
  );

  return {
    pathPrefix: process.env.PATH_PREFIX || "/",
    dir: {
      input: ".",
      includes: "src/_includes",
      data: "src/_data",
      output: "_site"
    },
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}
