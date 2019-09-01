import Loadable from 'react-loadable'
import Loading from './Placeholder'
import './scss/eventDetail.scss'

const LoadableEventDetail = Loadable({
  loader: () => import('./EventDetail'),
  loading: Loading
})

export default LoadableEventDetail
