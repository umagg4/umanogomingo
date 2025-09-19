module.exports = function(eleventyConfig) {

 // 本番環境（production）の時だけ、パスの先頭にリポジトリ名を付与する
  const isProduction = process.env.NODE_ENV === 'production';

  // 画像をコピー
  
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/css");

  const fs = require("fs");

  // おえかき用コレクション
eleventyConfig.addCollection("galleryImages", function() {
  const dir = "src/images/portfolio";
  return fs.readdirSync(dir)
    .filter(f => /\.(jpg|jpeg|png|gif)$/i.test(f))
    .map(f => ({ 
      fileName: f, 
      url: "/images/portfolio/" + f  // パスプレフィックスなし
    }));
});

  // もでりんぐ用コレクション
  eleventyConfig.addCollection("modelingImages", function() {
    const dir = "src/images/3dcg";
    return fs.readdirSync(dir)
      .filter(f => /\.(jpg|jpeg|png|gif)$/i.test(f))
      .map(f => ({ fileName: f, url: "/images/3dcg/" + f }));
  });

  return {

    // passthroughFileCopy: true, // 画像などをdistにコピーする設定など、他の設定はそのまま
    pathPrefix : isProduction ?"/umanogomingo/" : "/",


    dir: {
      input: "src",
      output: "docs",

    }
  };
};
