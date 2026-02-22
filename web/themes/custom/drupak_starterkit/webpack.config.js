const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
entry: "./js/main.js",
devtool: 'source-map', 
mode: 'production',
output: {
  filename: "main.js",
  path: path.resolve(__dirname, "./build")
},
module: {
  rules: [
    {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader, 
        "css-loader",
        "postcss-loader",
         
] }
] },
plugins: [
  new MiniCssExtractPlugin({
    filename: "main.css",
  }),
] };