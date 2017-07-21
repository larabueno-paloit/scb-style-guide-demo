// default env is dev
module.exports = (env = 'dev') => require(`./.webpack/webpack.${env}`)
