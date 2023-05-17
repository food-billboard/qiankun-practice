import { defineConfig } from '@umijs/max';
import { apps } from './config/qiankun'
import routes from './config/routes'

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  history: {
    type: 'hash'
  },
  layout: {
    title: '@umijs/max',
  },
  // headScripts: ['https://unpkg.com/zone.js'],
  headScripts: [
    'https://cdnjs.cloudflare.com/ajax/libs/zone.js/0.13.0/zone.min.js'
  ],
  routes,
  qiankun: {
    master: {
      apps,
      // routes: [
      //   {
      //     path: '/sub-react-project/mine',
      //     microApp: 'sub-react-project'
      //   }
      // ]
    }
  },
  npmClient: 'yarn',
});

