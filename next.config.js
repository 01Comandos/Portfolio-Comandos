// next.config.js
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([
  [
    optimizedImages,
    {
      handleImages: ["jpeg", "png", "svg"],
      optimizeImagesInDev: false,
      imagesName: "[name].[ext]",
    },
  ],

  // your other plugins here
]);
