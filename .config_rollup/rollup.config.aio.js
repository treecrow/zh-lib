const nodeResolve = require("rollup-plugin-node-resolve");
const commonjs = require("rollup-plugin-commonjs");
const { uglify } = require("rollup-plugin-uglify");
const { babelCompiler, libName, banner } = require("./rollup.js");

// 开发环境配置
const rollupConfig = {
  input: "src/index.js",
  output: {
    file: "dist/index.aio.js",
    format: "umd",
    // When export and export default are not used at the same time, set legacy to true.
    // legacy: true,
    name: libName,
    banner
  },
  plugins: [
    nodeResolve({
      main: true,
      extensions: [".js"]
    }),
    commonjs({
      include: "node_modules/**"
    }),
    babelCompiler
  ]
};
// 生产环境配置
if (process.env.NODE_ENV === "production") {
  rollupConfig.output.file = "dist/index.aio.min.js";
  rollupConfig.plugins.push(uglify());
}

module.exports = rollupConfig;
