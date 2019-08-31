import Loadable from 'react-loadable'
import Loading from './Placeholder'

const LoadableSlider = Loadable({
  loader: () => import('./Slider'),
  loading: Loading
})

export default LoadableSlider
