const babel = require("rollup-plugin-babel");
const { name, version } = require("../package.json");

module.exports = {
  babelCompiler: babel({
    babelrc: false,
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            browsers:
              "last 2 versions, > 1%, ie >= 6, Android >= 4, iOS >= 6, and_uc > 9",
            node: "0.10"
          },
          modules: false,
          loose: false
        }
      ]
    ],
    plugins: [
      [
        "@babel/plugin-transform-runtime",
        {
          helpers: false,
          regenerator: false
        }
      ]
    ],
    runtimeHelpers: true,
    exclude: "node_modules/**"
  }),
  libName: "toolLib",
  banner: `/*!
    * ${name} ${version} (https://github.com/treecrow/dry-tool-lib)
    */
  `
};
