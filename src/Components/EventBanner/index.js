import Loadable from 'react-loadable'
import Loading from './Placeholder'
import './eventBanner.scss'

const LoadableEventBanner = Loadable({
  loader: () => import('./EventBanner'),
  loading: Loading
})

export default LoadableEventBanner
