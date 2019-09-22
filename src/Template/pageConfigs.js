import Page404 from './Pages/404'
import HomePage from './Pages/Home'
import EventDetail from './Pages/EventDetail'
import LoginPage from './Pages/Login'
import EventCreate from './Pages/EventCreate'
import EventDetailManage from './Pages/EventDetailManage'

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
    path: '/manage/:id',
    component: EventDetailManage,
    exact: true
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
  },
  {
    path: '/manage/event/:id',
    component: EventDetailManage,
    exact: true,
    private: true
  }
]

export default pageConfigs
