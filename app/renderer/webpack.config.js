const webpack = require("webpack");
const { join } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/**
 * @type {webpack.Configuration}
 */
const config = {
  entry: join(__dirname, "index.js"),
  output: {
    path: join(__dirname, "..", "..", "build", "renderer"),
    filename: "bundle.js",
  },
  target: "electron-renderer",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
        exclude: [/node_modules/, /app\/main/],
      },
    ],
  },
  performance: false,
  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, "public", "index.html"),
      favicon: join(__dirname, "public", "favicon.ico"),
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
};

module.exports = config;
