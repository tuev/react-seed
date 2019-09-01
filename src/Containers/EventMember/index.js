import Loadable from 'react-loadable'
import Loading from './Placeholder'

const LoadableEventMember = Loadable({
  loader: () => import('./EventMember'),
  loading: Loading
})

export default LoadableEventMember
