const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;
const webpackMerge = require("webpack-merge")
const packageName = require('./package.json').name

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  const singleSpaConfig = {
    // output: {
    //   // 微应用的包名，这里与主应用中注册的微应用名称一致
    //   library: `${packageName}-[name]`,
    //   // 将你的 library 暴露为所有的模块定义下都可运行的方式
    //   libraryTarget: "umd",
    // },
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
    output: {
      library: `${packageName}-[name]`,
      libraryTarget: 'umd',
      // jsonpFunction: `webpackJsonp_${packageName}`,
      chunkLoadingGlobal: `webpackJsonp_${packageName}`,
    },
    externals: {
      "zone.js": "Zone",
    },
  };

  const mergedConfig = webpackMerge.smart(
    singleSpaWebpackConfig,
    singleSpaConfig
  );
  
  return mergedConfig;
};
