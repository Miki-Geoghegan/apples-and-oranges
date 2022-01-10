import { DECREASE_TIMER } from 'store/constants/timer'

const initialState = {
  time: 5
}

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
  case DECREASE_TIMER:
    return {
      ...state,
      time: state.time - 1
    }
  default: return state
  }
}

export default timerReducer
