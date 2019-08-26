import Loadable from 'react-loadable'
import Loading from './EventItem.placeholder'

const LoadableEventItem = Loadable({
  loader: () => import('./EventItem'),
  loading: Loading
})

export default LoadableEventItem
