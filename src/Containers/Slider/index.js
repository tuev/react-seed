import Loadable from 'react-loadable'
import Loading from './Slider.placeholder'

const LoadableSlider = Loadable({
  loader: () => import('./Slider'),
  loading: Loading
})

export default LoadableSlider
