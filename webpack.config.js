module.exports = (env, argv) => {
  const config = argv.mode === 'production' ? require('./webpack/webpack.prod.js') : require('./webpack/webpack.dev.js')

  return config
}
