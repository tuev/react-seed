import Loadable from 'react-loadable'
import Loading from './EventList.placeholder'

const LoadableEventList = Loadable({
  loader: () => import('./EventList'),
  loading: Loading
})

export default LoadableEventList
