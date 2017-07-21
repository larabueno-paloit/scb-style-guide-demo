const loaders = require('loaders')

module.exports = {
  components: 'src/components/**/index.js[x]',
  defaultExample: true,
  webpackConfig: {
    module: {
      loaders: loaders.all
    }
  },
  title: 'StyleGuidist'
}
