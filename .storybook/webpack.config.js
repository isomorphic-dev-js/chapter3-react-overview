var path = require('path')
var webpack = require('webpack')

module.exports = {
  module: {
    loaders: [
      {
        test: /\.(scss|css)$/,
        loaders: ['style', 'css']
      }
    ]
  }
}
