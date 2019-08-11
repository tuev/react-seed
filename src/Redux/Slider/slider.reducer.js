import initSliderStore from './slider.store'

const SliderReducer = (state = initSliderStore, action) => {
  if (action.type === 'TOGGLE_PLAY') {
    state.isPlay ? state.slider.slickPause() : state.slider.slickPlay()
    state.isPlay = !state.isPlay

    return state
  }

  if (action.type === 'INIT_SLIDER') {
    return {
      ...state,
      slider: action.payload
    }
  }

  return state
}

export default SliderReducer
