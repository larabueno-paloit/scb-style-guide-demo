const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

// def
const pathBuild = (...paths) => path.join(__dirname, '..', 'dist', ...paths)
const pathSrc = (...paths) => path.join(__dirname, '..', 'src', ...paths)
const cssModuleScopedName = '[path]_[name]_[local]'
const jsEntry = pathSrc('index.jsx')

// init config
const config = {
  context: pathSrc(),
  entry: jsEntry,
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', pathSrc()]
  },
  module: {rules: []},
  plugins: []
}

// ----------------------------------------------------------
// output
config.output = {
  path: pathBuild(),
  filename: 'assets/js/[name].[hash].js',
  sourceMapFilename: 'assets/js/[name].[hash].map'
}

// ----------------------------------------------------------
// rules
// handle js/jsx
config.module.rules.push({
  test: /\.jsx?$/,
  use: ['babel-loader']
})

// add rule to support images
config.module.rules.push({
  test: /\.(png|gif|jpe?g|svg)$/,
  loader: 'file-loader',
  options: {name: '[path]/[name].[ext]'}
})

// add rule to support css
config.module.rules.push({
  test: /\.css$/,
  use: [
    'style-loader',
    `css-loader?importLoader=1&modules&localIdentName=${cssModuleScopedName}`
  ]
})

// ----------------------------------------------------------
// plugins
// copy HTML entry file
config.plugins.push(new HtmlWebpackPlugin({
  filename: pathBuild('index.html'),
  template: pathSrc('index.html'),
  htmlVersion: 'PROD'
}))

// define env
config.plugins.push(new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': '"prod"'
  }
}))

// copy public folder
config.plugins.push(new CopyWebpackPlugin([{
  from: pathSrc('..', 'public'),
  to: pathBuild('public')
}]))

module.exports = config
