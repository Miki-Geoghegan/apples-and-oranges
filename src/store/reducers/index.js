import { combineReducers } from 'redux'
import countReducer from 'store/reducers/countReducer'
import gameStatusReducer from 'store/reducers/gameStatusReducer'

export default combineReducers({
  countReducer,
  gameStatusReducer
})
