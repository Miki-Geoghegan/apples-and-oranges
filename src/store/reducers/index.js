import { combineReducers } from 'redux'
import countReducer from 'store/reducers/countReducer'
import fruitTypeReducer from 'store/reducers/gameStatusReducer'

export default combineReducers({
  countReducer,
  fruitTypeReducer
})
