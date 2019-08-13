import initSliderStore from './slider.store'
import { TOGGLE_PLAY, INIT_SLIDER, SLICKGOTO } from './slider.actionTypes'

const SliderReducer = (state = initSliderStore, action) => {
  if (action.type === TOGGLE_PLAY) {
    const play = slider => {
      slider.slickPlay()
    }

    const pause = slider => {
      slider.slickPause()
    }

    state.isPlay ? pause(state.slider) : play(state.slider)

    return { ...state, isPlay: !state.isPlay }
  }

  if (action.type === INIT_SLIDER) {
    return {
      ...state,
      slider: action.payload
    }
  }

  if (action.type === SLICKGOTO) {
    const _goToIndex = (slider, index) => slider.slickGoTo(index, true)
    _goToIndex(state.slider, action.payload)

    return { ...state }
  }

  return state
}

export default SliderReducer
