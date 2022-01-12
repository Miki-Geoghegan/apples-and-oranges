import { DECREASE_TIMER } from 'store/constants/timer'
import { connect } from 'react-redux'
import { APPLE, ORANGE } from 'utils/constants'
import { GAME_HAS_FINISHED, SET_FRUIT_TYPE } from 'store/constants/gameStatus'
import React, { Component } from 'react'

class EndGame extends Component {

  // logic: if the timer === 0 and the { count } = applesTotalNumber/ orangesTotalNumber then return GAME OVER if !time === 0, return null
  // need to access the time (timerReducer), the count (countReducer) and totalNumbers (gameStatusReducer) and the gameHasFinished (gameStatusReducer)
  renderEndGame() {
    const { count, fruitType, orangesTotalNumber, applesTotalNumber } = this.props
    console.log( count, fruitType, orangesTotalNumber, applesTotalNumber)

    if (fruitType === ORANGE & count === orangesTotalNumber || fruitType === APPLE & count === applesTotalNumber) {
      return (
        <p>YOU HAVE WON</p>
      )
    }

    return (
      <p>GAME OVER</p>
    )
  }

  render() {
    const { hasGameFinished } = this.props

    if (!hasGameFinished) return null

    return (
      <div>{ this.renderEndGame() }</div>
    )
  }

}

const mapStateToProps = ({ countReducer: { count }, gameStatusReducer: { applesTotalNumber, fruitType, hasGameFinished, orangesTotalNumber }, timerReducer: { time } }) => {
  return {
    applesTotalNumber,
    count,
    fruitType,
    hasGameFinished,
    orangesTotalNumber,
    time
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    chooseFruit: (payload) => {
      return dispatch({ payload, type: SET_FRUIT_TYPE })
    },
    startGame: () => {
      return dispatch({ type: GAME_HAS_FINISHED })
    },
    startTimer: () => {
      return dispatch({ type: DECREASE_TIMER })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EndGame)
