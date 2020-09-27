const webpack = require("webpack");
const { join } = require("path");

/**
 * @type {webpack.Configuration}
 */
const config = {
  entry: { index: join(__dirname, "index.js") },
  output: {
    path: join(__dirname, "..", "..", "build", "main"),
    filename: "[name].js",
  },
  target: "electron-main",
  node: {
    __dirname: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.node$/,
        use: "node-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
  performance: false,
};

module.exports = config;
