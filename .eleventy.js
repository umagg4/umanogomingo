const fs = require("fs");
const Image = require("@11ty/eleventy-img");

module.exports = function(eleventyConfig) {
  const isProduction = process.env.NODE_ENV === "production";

  eleventyConfig.addPassthroughCopy("src/css");

  // サムネイル生成関数
  async function generateImages(dir, subPath) {
    const files = fs.readdirSync(dir).filter(f => /\.(jpg|jpeg|png|gif)$/i.test(f));

    let results = [];
    for (let file of files) {
      let srcPath = `${dir}/${file}`;

      // サムネイル画像を生成（250px） + 元画像
      let metadata = await Image(srcPath, {
        widths: [250, null], // サムネイル + 元サイズ
        formats: ["jpeg"],
        outputDir: "./docs/images/" + subPath, // 出力先
        urlPath: "/images/" + subPath + "/",   // 公開パス
        filenameFormat: (id, src, width, format, options) => {
          // 元ファイル名に _ がつかないように
          const name = src.split("/").pop().replace(/\.[^/.]+$/, "");
          return `${name}-${width}.${format}`;
        }
      });

      results.push({
        fileName: file,
        thumbUrl: metadata.jpeg[0].url, // サムネイル
        fullUrl: metadata.jpeg[1].url   // 元サイズ
      });
    }
    return results;
  }

  // コレクション: おえかき
  eleventyConfig.addCollection("galleryImages", async function() {
    return await generateImages("src/images/portfolio", "portfolio");
  });

  // コレクション: もでりんぐ
  eleventyConfig.addCollection("modelingImages", async function() {
    return await generateImages("src/images/3dcg", "3dcg");
  });

  return {
    pathPrefix: isProduction ? "/umanogomingo/" : "/",
    dir: {
      input: "src",
      output: "docs",
    }
  };
};
