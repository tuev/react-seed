import { combineReducers } from 'redux'
import event from './Event/event.reducer'
import searchReducer from './SearchEvent/search.reducer'

const appReducer = combineReducers({ event, searchEvent: searchReducer })

export default appReducer
