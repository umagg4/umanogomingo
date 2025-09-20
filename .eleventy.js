const fs = require("fs");
const Image = require("@11ty/eleventy-img");

module.exports = function(eleventyConfig) {
  const isProduction = process.env.NODE_ENV === "production";

  eleventyConfig.addPassthroughCopy("src/css");

  // �T���l�C�������֐�
  async function generateImages(dir, subPath) {
    const files = fs.readdirSync(dir).filter(f => /\.(jpg|jpeg|png|gif)$/i.test(f));

    let results = [];
    for (let file of files) {
      let srcPath = `${dir}/${file}`;

      // �T���l�C���摜�𐶐��i250px�j + ���摜
      let metadata = await Image(srcPath, {
        widths: [250, null], // �T���l�C�� + ���T�C�Y
        formats: ["jpeg"],
        outputDir: "./docs/images/" + subPath, // �o�͐�
        urlPath: "/images/" + subPath + "/",   // ���J�p�X
        filenameFormat: (id, src, width, format, options) => {
          // ���t�@�C������ _ �����Ȃ��悤��
          const name = src.split("/").pop().replace(/\.[^/.]+$/, "");
          return `${name}-${width}.${format}`;
        }
      });

      results.push({
        fileName: file,
        thumbUrl: metadata.jpeg[0].url, // �T���l�C��
        fullUrl: metadata.jpeg[1].url   // ���T�C�Y
      });
    }
    return results;
  }

  // �R���N�V����: ��������
  eleventyConfig.addCollection("galleryImages", async function() {
    return await generateImages("src/images/portfolio", "portfolio");
  });

  // �R���N�V����: ���ł��
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
