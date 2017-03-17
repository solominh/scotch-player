

const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const ASSET_PATH = process.env.ASSET_PATH || '/';
console.log(ASSET_PATH);

const config = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath:ASSET_PATH,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        // query: {
        //   presets: [['es2015', { modules: false }]],
        //   plugins: []
        // }
      }
    ]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
    }),
  ]
};

module.exports = config;
