import { combineReducers } from 'redux'
import countReducer from 'store/reducers/countReducer'
import gameStatusReducer from 'store/reducers/gameStatusReducer'
import timerReducer from 'store/reducers/timerReducer'

export default combineReducers({
  countReducer,
  gameStatusReducer,
  timerReducer
})
