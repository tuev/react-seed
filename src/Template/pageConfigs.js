import Page404 from './Pages/404'
import HomePage from './Pages/Home'
import EventDetail from './Pages/EventDetail'
import LoginPage from './Pages/Login'
import EventCreate from './Pages/EventCreate'
import EventDetailManage from './Pages/EventDetailManage'
import EventManage from './Pages/EventsManage'

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
  },
  {
    path: '/manage',
    component: EventManage,
    exact: true,
    private: true
  },
  {
    path: '/manage/:id',
    component: EventDetailManage,
    exact: true,
    private: true
  },
  {
    path: '/event/:id',
    component: EventDetail,
    exact: true
  },
  {
    path: '/login',
    component: LoginPage,
    exact: true
  },
  {
    path: '/create',
    component: EventCreate,
    exact: true,
    private: true
  }
]

export default pageConfigs
