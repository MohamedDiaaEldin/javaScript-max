const path = require('path');
module.exports = {
  mode: 'production',
  entry: './src/script.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'assets', 'scripts'),
    publicPath: 'assets/scripts/'    
  },
  devtool: 'eval-cheap-source-map',
  devServer: {
    static: './'
  }
  , 
  plugins: [
    new CleanPlugin.CleanWebpackPlugin()
  ]
};