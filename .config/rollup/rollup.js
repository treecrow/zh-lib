const babel = require("rollup-plugin-babel");
const typescript = require("rollup-plugin-typescript2");
const { name, version } = require("../../package.json");

const tsCompiler = typescript({
  tsconfigOverride: { compilerOptions: { module: "ES2015" } }
});
const babelCompiler = babel({
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
});
module.exports = {
  compiler: babelCompiler,
  libName: "toolLib",
  banner: `/*!
    * ${name} ${version} (https://github.com/treecrow/dry-tool-lib)
    */
  `
};
