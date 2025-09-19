module.exports = function(eleventyConfig) {

 

 

  // �摜���R�s�[
  
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/css");

  const fs = require("fs");

  // ���������p�R���N�V����
eleventyConfig.addCollection("galleryImages", function() {
  const dir = "src/images/portfolio";
  return fs.readdirSync(dir)
    .filter(f => /\.(jpg|jpeg|png|gif)$/i.test(f))
    .map(f => ({ 
      fileName: f, 
      url: "/images/portfolio/" + f  // �p�X�v���t�B�b�N�X�Ȃ�
    }));
});

  // ���ł�񂮗p�R���N�V����
  eleventyConfig.addCollection("modelingImages", function() {
    const dir = "src/images/3dcg";
    return fs.readdirSync(dir)
      .filter(f => /\.(jpg|jpeg|png|gif)$/i.test(f))
      .map(f => ({ fileName: f, url: "/images/3dcg/" + f }));
  });

  return {

    // passthroughFileCopy: true, // �摜�Ȃǂ�dist�ɃR�s�[����ݒ�ȂǁA���̐ݒ�͂��̂܂�
    

    dir: {
      input: "src",
      output: "docs",

    }
  };
};
