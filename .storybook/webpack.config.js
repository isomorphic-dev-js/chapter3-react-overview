var path = require('path')
var webpack = require('webpack')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        loaders: ['style', 'css']
      }
    ]
  }
}
