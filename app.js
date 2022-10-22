const Jimp = require("jimp");

Jimp.read("images/khana.jpeg", (err, khana) => {
  if (err) throw err;
  Jimp.loadFont(Jimp.FONT_SANS_128_BLACK).then((font) => {
    khana
      .print(font, 10, 10, "Hello world!")
      .write("images/khana-small-bw.jpeg"); // save
  });
}).catch((err) => {
  console.error(err);
});
