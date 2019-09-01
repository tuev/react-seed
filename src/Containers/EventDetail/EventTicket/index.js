import Loadable from 'react-loadable'
import Loading from './Placeholder'

const LoadableEventTicket = Loadable({
  loader: () => import('./EventTicket'),
  loading: Loading
})

export default LoadableEventTicket
