const textToImage = require("text-to-image");

//This script converts text to image and gives uri.
textToImage
  .generate("This script converts text to image and gives uri", {
    debug: true,
    maxWidth: 720,
    fontSize: 40,
    fontFamily: "Arial",
    lineHeight: 50,
    margin: 5,
    bgColor: "black",
    textColor: "red",
  })
  .then(function (dataUri) {
    // console.log(dataUri);
  });
