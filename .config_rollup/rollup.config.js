// rollup.config.js
const { banner } = require("./rollup.js");
const { compiler } = require("./rollup.js");
module.exports = {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    format: "cjs",
    // When export and export default are not used at the same time, set legacy to true.
    // legacy: true,
    banner
  },
  plugins: [compiler]
};
