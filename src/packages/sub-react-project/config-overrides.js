const { 
  override, 
  overrideDevServer, 
  watchAll,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
  addWebpackPlugin,
  adjustStyleLoaders
} = require('customize-cra');
const path = require('path')
const LodashWebpackPlugin = require('lodash-webpack-plugin')
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
    },
    addWebpackAlias({
      '@': path.resolve(__dirname, "src")
    }),
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
    addLessLoader({
      javascriptEnabled: true,
      // modifyVars: { '@primary-color': '#1DA57A' },
      localIdentName: '[local]--[hash:base64:5]' // 自定义 CSS Modules 的 localIdentName
    }),
    adjustStyleLoaders(({ use: [, , postcss] }) => {
      const postcssOptions = postcss.options;
      postcss.options = { postcssOptions };
    }),
    addWebpackPlugin(
      new LodashWebpackPlugin({       
        collections: true,       
        paths: true    
      }),
    )
  ),
  devServer: overrideDevServer(config => {
    config.headers = config.headers || {} 
    config.headers['Access-Control-Allow-Origin'] = '*'
    // config.historyApiFallback = true;
    // config.hot = false;
    // config.watchContentBase = false;
    // config.liveReload = false;
    config.compress = true 
    config.proxy = {
      '/api': {
        target: 'https://www.baidu.com',
        // changeOrigin: true,
        // pathRewrite: {
        //   '^/api': '/api',
        // },
      }
    }
    return config 
  }, watchAll())
}