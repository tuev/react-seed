import Loadable from 'react-loadable'
import Loading from './Placeholder'

const LoadableEventDescription = Loadable({
  loader: () => import('./EventDescription'),
  loading: Loading
})

export default LoadableEventDescription
