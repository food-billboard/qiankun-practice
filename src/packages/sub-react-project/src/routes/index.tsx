import App from '../pages/Home'
import Mine from '../pages/Mine'
import About from '../pages/About'

const routes = [
  {
    path: "/mine",
    element: <Mine />,
    // loader: teamLoader,
  },
  {
    path: "/about",
    element: <About />,
    // loader: teamLoader,
  },
  {
    path: "/",
    element: <App />,
    // loader: rootLoader,
  },
]

export default routes