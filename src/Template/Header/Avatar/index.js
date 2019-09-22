import Loadable from 'react-loadable'
import Loading from './Placeholder'

const LoadableAvatar = Loadable({
  loader: () => import('./Avatar'),
  loading: Loading
})

export default LoadableAvatar
