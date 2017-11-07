const path               = require('path');
const webpack            = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {index: './src/index.js'},

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'v-feedback'
  },

  resolve: {
    extensions: ['.js'],
  },

  devtool: '#source-map',

  plugins: [
    new CleanWebpackPlugin([path.join(__dirname, '../dist')],
      {root: path.join(__dirname, '../'), verbose: true, dry: false}),
    new webpack.LoaderOptionsPlugin({minimize: true, debug: false}),
    new webpack.DefinePlugin({'process.env': {NODE_ENV: '"production"'}}),
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false},
      sourceMap: true
    }),
  ]
};