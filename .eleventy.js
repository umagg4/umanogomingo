module.exports = function(eleventyConfig) {

 // �{�Ԋ��iproduction�j�̎������A�p�X�̐擪�Ƀ��|�W�g������t�^����
  const isProduction = process.env.NODE_ENV === 'production';

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
    pathPrefix : isProduction ?"/umanogomingo/" : "/",


    dir: {
      input: "src",
      output: "docs",

    }
  };
};
