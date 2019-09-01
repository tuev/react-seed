import Loadable from 'react-loadable'
import Loading from './Placeholder'

const LoadableBanner = Loadable({
  loader: () => import('./Banner'),
  loading: Loading
})

export default LoadableBanner
