module.exports = function(eleventyConfig) {
const fs = require("fs");

// 本番環境（production）の時だけ、パスの先頭にリポジトリ名を付与する
const isProduction = process.env.NODE_ENV === "production";

// 画像をコピー
eleventyConfig.addPassthroughCopy("src/images");
eleventyConfig.addPassthroughCopy("src/css");

// おえかき用コレクション
eleventyConfig.addCollection("galleryImages", function() {
 const dir = "src/images/portfolio";
 return fs.readdirSync(dir)
   .filter(f => /\.(jpg|jpeg|png|gif)$/i.test(f))
   .map(f => ({
     fileName: f,
     url: (isProduction ? "/umanogomingo/images/portfolio/" : "/images/portfolio/") + f
   }));
});

// もでりんぐ用コレクション
eleventyConfig.addCollection("modelingImages", function() {
 const dir = "src/images/3dcg";
 return fs.readdirSync(dir)
   .filter(f => /\.(jpg|jpeg|png|gif)$/i.test(f))
   .map(f => ({
     fileName: f,
     url: (isProduction ? "/umanogomingo/images/3dcg/" : "/images/3dcg/") + f
   }));
});

return {
 pathPrefix: isProduction ? "/umanogomingo/" : "/",
 dir: {
   input: "src",
   output: "docs",
 }
};
};