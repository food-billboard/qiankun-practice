
export default [
  {
    name: '首页',
    path: '/home',
    component: './Home',
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
  {
    name: 'jquery子应用',
    path: '/sub-jquery-project',
    microApp: 'sub-jquery-project'
  },
  {
    path: '/',
    redirect: '/home',
  },
]