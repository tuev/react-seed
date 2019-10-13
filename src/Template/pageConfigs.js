import Page404 from './Pages/404'
import HomePage from './Pages/Home'

const pageConfigs = [
  {
    path: '/',
    component: HomePage,
    exact: true
  },
  {
    path: '/404',
    component: Page404,
    exact: true
  }
]

export default pageConfigs
