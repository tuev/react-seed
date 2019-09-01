import Loadable from 'react-loadable'
import Loading from './Placeholder'

const LoadableEventBanner = Loadable({
  loader: () => import('./EventBanner'),
  loading: Loading
})

export default LoadableEventBanner
