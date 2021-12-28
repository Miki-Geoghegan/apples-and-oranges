import { combineReducers } from 'redux'
import countReducer from './countReducer'
import fruitTypeReducer from './gameStatusReducer'

export default combineReducers({
  countReducer,
  fruitTypeReducer
})
