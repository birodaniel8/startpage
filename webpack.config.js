const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./startpage/frontend/src/index.js",
  output: {
    path: path.resolve(__dirname, "./startpage/frontend/static/frontend"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        "process.env.NODE_ENV": JSON.stringify("production"),
      },
    }),
    new HtmlWebpackPlugin({
      favicon: "favicon.ico",
    }),
  ],
};
