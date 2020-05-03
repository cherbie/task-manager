const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")


module.exports = {
  entry: path.resolve(__dirname, "client", "index.tsx"),
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[id].bundle.js",
    publicPath: "/assets/",
    path: path.resolve(__dirname, "public/assets"),
    crossOriginLoading: "anonymous"
  },
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"]
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
        use: [
          "style-loader",
          "css-loader"
        ]
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
  plugins: [new CleanWebpackPlugin()]
}

