const { override, overrideDevServer, watchAll } = require('customize-cra');
const packageName = require('./package.json').name

module.exports = {
  webpack: override(
    (config) => {
      config.output = {
        ...config.output,
        library: `${packageName}-[name]`,
        libraryTarget: 'umd',
        // jsonpFunction: `webpackJsonp_${packageName}`,
        chunkLoadingGlobal: `webpackJsonp_${packageName}`,
      }
      return config 
    }
  ),
  devServer: overrideDevServer(config => {
    config.headers = config.headers || {} 
    config.headers['Access-Control-Allow-Origin'] = '*'
    // config.historyApiFallback = true;
    // config.hot = false;
    // config.watchContentBase = false;
    // config.liveReload = false;
    return config 
  }, watchAll())
}