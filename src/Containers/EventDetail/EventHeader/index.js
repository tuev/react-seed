import Loadable from 'react-loadable'
import Loading from './Placeholder'

const LoadableEventHeader = Loadable({
  loader: () => import('./EventHeader'),
  loading: Loading
})

export default LoadableEventHeader
