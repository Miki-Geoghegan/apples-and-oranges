import {
  GAME_HAS_FINISHED,
  GAME_HAS_STARTED,
  RESTART_GAME,
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
  case RESTART_GAME:
    return {
      initialState
    }
  default: return state
  }
}

export default gameStatusReducer

// store = get state and dispatch inside as props
// next add stop to the timer, focus on creating a fruit component - this will be what is moving across the screen
// what's in mind: on playGame component - we should try to access the total amount of fruits that we have on the gameStatusReducer (triggered by middleware)
// for each number, trigger a rendering of all of the fruits and render the new component - an array of all the fruits available, use CSS to add a delay (render them all at the same time and then modify the delay of the animation on CSS so they appear to start at different times)
