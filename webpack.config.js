const path = require("path")

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "client", "index.tsx"),
  output: {
    filename: "[id].bundle.js",
    chunkFilename: "[id].bundle.js",
    publicPath: "/assets/",
    path: path.resolve(__dirname, "public/assets"),
    crossOriginLoading: "anonymous"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "ts-loader"
          }
        ]
      }
    ]
  },
  devtool: "cheap-module-source-map",
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"]
  },
  devServer: {
    contentBase: [path.resolve(__dirname, "public"), path.resolve(__dirname, "client")],
    port: 9000,
    open: true,
    hot: true,
    watchContentBase: true,
    compress: true,
    index: "index.html"
  }
}

