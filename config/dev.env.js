'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  proxyTable: {
    target:'http://127.0.0.1:8081',
    changeOrigin: true,
  }
})
