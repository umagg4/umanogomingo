module.exports = function(eleventyConfig) {

 

 

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
    

    dir: {
      input: "src",
      output: "docs",

    }
  };
};
