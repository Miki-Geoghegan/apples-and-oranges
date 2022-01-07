import {
  GAME_HAS_FINISHED,
  GAME_HAS_STARTED,
  SET_FRUITS_TOTAL_NUMBER,
  SET_FRUIT_TYPE
} from 'store/constants/gameStatus'

const initialState = {
  applesTotalNumber: null,
  fruitType: null,
  hasGameFinished: false,
  hasGameStarted: false,
  orangesTotalNumber: null
}

const gameStatusReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_FRUIT_TYPE:
    return {
      ...state,
      fruitType: action.payload
    }
  case GAME_HAS_STARTED:
    return {
      ...state,
      hasGameStarted: true
    }
  case GAME_HAS_FINISHED:
    return {
      ...state,
      hasGameFinished: true
    }
  case SET_FRUITS_TOTAL_NUMBER:
    return {
      ...state,
      applesTotalNumber: action.payload.applesTotalNumber,
      orangesTotalNumber: action.payload.orangesTotalNumber
    }
  default: return state
  }
}

export default gameStatusReducer
