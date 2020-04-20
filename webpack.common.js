const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src', 'client', 'index.js'),
  },
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'build', 'public'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'MERN Stack',
      template: path.resolve(__dirname, 'src', 'client', 'index.html'),
    }),
    new WebpackBar(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
