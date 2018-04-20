const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/main.js',
  output: {
    filename: "[name].bound.js",
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.less$/, use: ['style-loader', 'less-loader']},
      {test: /\.(gif|jpg|png|jpeg|svg|)$/, use: 'url-loader'},
      {test: /\.vue$/, use: "vue-loader"},
    ]
  },

  plugins: [
    new HtmlWebpackPlugin('./index.html')
  ],
  devServer: {
    inline:true,
    open:true,
    port:8880,
    host:'localhost',
    contentBase:'./',
  }
};