import Loadable from 'react-loadable'
import Loading from './Placeholder'

const LoadableEventList = Loadable({
  loader: () => import('./EventList'),
  loading: Loading
})

export default LoadableEventList
