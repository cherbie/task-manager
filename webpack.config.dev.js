const path = require("path")
const merge = require("webpack-merge")
const common = require("./webpack.config.common")

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    contentBase: [path.resolve(__dirname, "public"), path.resolve(__dirname, "client")],
    port: 9000,
    open: true,
    hot: true,
    watchContentBase: true,
    compress: true,
    index: "index.html"
  }
})