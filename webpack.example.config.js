const {resolve} = require('path');
const options = require('./webpack.config');

options.mode = 'development';
options.entry = './example/';

options.output.filename = 'example.js';
options.output.libraryTarget = 'var';
options.output.publicPath = "/dist";

options.devServer = {
  contentBase: [
    resolve(__dirname, "example"),
  ],
  host: "192.168.1.33",
  port: '8000',
  publicPath: "/dist"
};

module.exports = options;
