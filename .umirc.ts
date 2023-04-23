import { defineConfig } from '@umijs/max';
import { apps } from './config/qiankun'
import routes from './config/routes'

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes,
  qiankun: {
    master: {
      apps 
    }
  },
  npmClient: 'yarn',
});

