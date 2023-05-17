
const getActiveRule = (hash: string) => (location: any) => location.hash.startsWith(hash)

export const apps = [
  {
    name: 'sub-react-project', 
    entry: '//localhost:5000',
    container: '#sub-react-project',
    activeRule: getActiveRule('#/sub-react-project')
  },
  {
    name: 'sub-vue-project', 
    entry: '//localhost:5001',
    container: '#sub-vue-project',
    activeRule: '/sub-vue-project',
  },
  {
    name: 'sub-angular-project', 
    entry: '//localhost:5002',
    container: '#sub-angular-project',
    activeRule: '/sub-angular-project',
  },
  {
    name: 'sub-jquery-project', 
    entry: '//localhost:5003',
    container: '#sub-jquery-project',
    activeRule: '/sub-jquery-project',
  }
]