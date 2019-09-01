import Loadable from 'react-loadable'
import Loading from './Placeholder'

const LoadablePagination = Loadable({
  loader: () => import('./Pagination'),
  loading: Loading
})

export default LoadablePagination
