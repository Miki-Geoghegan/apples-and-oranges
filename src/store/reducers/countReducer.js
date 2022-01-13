import { RESTART_GAME } from 'store/constants/gameStatus'
import { DECREASE_COUNT, INCREASE_COUNT } from 'store/constants/count'

const initialState = {
  count: 0
}

const countReducer = (state = initialState, action) => {
  switch (action.type) {
  case INCREASE_COUNT:
    return {
      ...state,
      count: state.count + 1
    }
  case DECREASE_COUNT:
    return {
      ...state,
      count: state.count - 1
    }
  case RESTART_GAME:
    return initialState
  default: return state
  }
}

export default countReducer

// add another case, if action type = game restart, return our initial state
