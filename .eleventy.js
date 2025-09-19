module.exports = function(eleventyConfig) {
const fs = require("fs");

// �{�Ԋ��iproduction�j�̎������A�p�X�̐擪�Ƀ��|�W�g������t�^����
const isProduction = process.env.NODE_ENV === "production";

// �摜���R�s�[
eleventyConfig.addPassthroughCopy("src/images");
eleventyConfig.addPassthroughCopy("src/css");

// ���������p�R���N�V����
eleventyConfig.addCollection("galleryImages", function() {
 const dir = "src/images/portfolio";
 return fs.readdirSync(dir)
   .filter(f => /\.(jpg|jpeg|png|gif)$/i.test(f))
   .map(f => ({
     fileName: f,
     url: (isProduction ? "/umanogomingo/images/portfolio/" : "/images/portfolio/") + f
   }));
});

// ���ł�񂮗p�R���N�V����
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