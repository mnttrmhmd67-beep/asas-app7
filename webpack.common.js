/*
==========================================================================================
  Dependencies
==========================================================================================
*/

const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/*
==========================================================================================
  Configuration
==========================================================================================
*/

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src", "main.js")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [
                require("autoprefixer"),
                require("postcss-nested"),
                require("cssnano")
              ]
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|svg)$/,
        exclude: /node_modules/,
        use: {
          loader: "file-loader"
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "static"),
          to: path.resolve(__dirname, "dist")
        }
      ]
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
      minify: false,
      inject: false,
      scriptLoading: "defer"
    })
  ]
};
