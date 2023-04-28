// import { 
//   registerMicroApps, 
//   start,
//   addGlobalUncaughtErrorHandler
// } from 'qiankun'
// import { apps } from '../config/qiankun'
import 'zone.js'

// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
  };
};

// registerMicroApps(apps, {
//   // 生命周期注册
//   beforeLoad: async (app) => {
//     console.log(app ,'load')

//   },
//   beforeMount: async (app) => {
//     console.log(app, 'mount')
//   }
// });

// addGlobalUncaughtErrorHandler((event) => {
//   console.error(event)
//   // 全局异常捕获
// })

// start();