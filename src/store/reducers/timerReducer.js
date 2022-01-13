import { DECREASE_TIMER } from 'store/constants/timer'
import { RESTART_GAME } from 'store/constants/gameStatus'

const initialState = {
  time: 15
}

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
  case DECREASE_TIMER:
    return {
      ...state,
      time: state.time - 1
    }
  case RESTART_GAME:
    return initialState
  default: return state
  }
}

export default timerReducer
