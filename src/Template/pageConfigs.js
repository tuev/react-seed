import Page404 from './pages/404'
import HomePage from './pages/Home'
import LoginPage from './pages/Login'

const pageConfigs = [
  {
    path: '/404',
    component: Page404,
    exact: true
  },
  {
    path: '/',
    component: HomePage,
    exact: true
  },
  {
    path: '/login',
    component: LoginPage,
    exact: true
  }
]

export default pageConfigs
