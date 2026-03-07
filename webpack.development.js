/*
==========================================================================================
  Dependencies
==========================================================================================
*/

const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

/*
==========================================================================================
  Configuration
==========================================================================================
*/

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    minimizer: [
      new TerserWebpackPlugin()
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ]
});
