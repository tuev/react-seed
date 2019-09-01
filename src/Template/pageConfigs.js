import Page404 from './Pages/404'
import HomePage from './Pages/Home'
import EventDetail from './Pages/EventDetail'
import LoginPage from './Pages/Login'

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
    path: '/:id',
    component: EventDetail
  },
  {
    path: '/login',
    component: LoginPage,
    exact: true
  }
]

export default pageConfigs
