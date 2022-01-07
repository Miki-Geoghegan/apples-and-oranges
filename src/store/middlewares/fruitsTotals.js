import { randomIntFromRange } from 'utils/functions'
import {
  GAME_HAS_STARTED,
  SET_FRUITS_TOTAL_NUMBER
} from 'store/constants/gameStatus'

export const fruitsTotalMiddleware = ({ dispatch }) => {
  return (next) => {
    return (action) => {
      next(action)

      if (action.type === GAME_HAS_STARTED) {
        dispatch({
          payload: {
            applesTotalNumber: randomIntFromRange(5, 15),
            orangesTotalNumber: randomIntFromRange(5, 15)
          },
          type: SET_FRUITS_TOTAL_NUMBER
        })
      }
    }
  }
}
