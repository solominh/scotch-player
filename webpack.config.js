

// const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
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
  ]
};

module.exports = config;
