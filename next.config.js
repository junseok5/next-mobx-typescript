const withTypescript = require('@zeit/next-typescript')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const withSass = require('@zeit/next-sass')

module.exports = withTypescript(
  withSass({
    webpack(config, options) {
      if (options.isServer)
        config.plugins.push(new ForkTsCheckerWebpackPlugin())
      return config
    },
    cssModules: true,
    sassLoaderOptions: {},
  })
)
