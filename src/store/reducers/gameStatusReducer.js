import { GAME_HAS_FINISHED, GAME_HAS_STARTED, SET_FRUIT_TYPE } from 'store/constants/gameStatus'

const initialState = {
  fruitType: null,
  hasGameFinished: false,
  hasGameStarted: false
}

const fruitTypeReducer = (state = initialState, action) => {
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
  default: return state
  }
}

export default fruitTypeReducer
