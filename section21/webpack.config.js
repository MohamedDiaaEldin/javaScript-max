const path = require('path');

const { CleanPlugin } = require('webpack');
module.exports = {
  mode: 'development',
  entry: './src/script.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'assets', 'scripts'),
    // publicPath: 'assets/scripts/'
    publicPath: './'
  },
  devtool: 'eval-cheap-source-map',
  devServer: {
    static: './'
  }
};