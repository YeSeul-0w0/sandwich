const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
const dotenv = require('dotenv');

module.exports = {
    entry: './src/main.js',
    output: {
      filename: 'app.js',
      path: `${__dirname}/dist`
    },
    devServer: {
      contentBase: './dist',
    },
    plugins: [
      new webpack.DefinePlugin({
          'process.env': JSON.stringify(dotenv.config().parsed),
      }),
      new HtmlWebpackPlugin({template:'./src/index.html',})],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },

};
