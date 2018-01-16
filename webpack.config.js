/* eslint-disable */
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['react-hot-loader/patch', path.join(__dirname, 'src', 'index')],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devtool: 'source-map',
  devServer: {
    hot: true,
    hotOnly: true,
    port: 3000,
    historyApiFallback: true,
    stats: { colors: true },
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
