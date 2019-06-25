import Page404 from './pages/404'
import HomePage from './pages/home'

const pageConfigs = [
  {
    path: '/404',
    component: Page404,
    exact: true,
  },
  {
    path: '/',
    component: HomePage,
    exact: true,
  },
]

export default pageConfigs
