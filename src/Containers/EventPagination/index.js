import Loadable from 'react-loadable'
import Loading from './Placeholder'

const LoadableEventPagination = Loadable({
  loader: () => import('./EventPagination'),
  loading: Loading
})

export default LoadableEventPagination
