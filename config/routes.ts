
export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '首页',
    path: '/home',
    component: './Home',
  },
  {
    name: '权限演示',
    path: '/access',
    component: './Access',
  },
  {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
  },
  {
    name: 'react子应用',
    path: '/sub-react-project',
    microApp: 'sub-react-project'
  },
  {
    name: 'vue子应用',
    path: '/sub-vue-project',
    microApp: 'sub-vue-project'
  },
  {
    name: 'angular子应用',
    path: '/sub-angular-project',
    microApp: 'sub-angular-project'
  },
]