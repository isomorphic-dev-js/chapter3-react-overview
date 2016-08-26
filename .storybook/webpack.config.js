var path = require('path')
var webpack = require('webpack')

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css?$/,
        loaders: [ 'style', 'raw' ],
        include: __dirname
      }
    ]
  }
}
