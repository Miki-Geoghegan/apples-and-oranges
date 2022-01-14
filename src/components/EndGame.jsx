import { APPLE } from 'utils/constants'
import { DECREASE_TIMER } from 'store/constants/timer'
import { connect } from 'react-redux'
import { GAME_HAS_FINISHED, RESTART_GAME, SET_FRUIT_TYPE } from 'store/constants/gameStatus'
import React, { Component } from 'react'

class EndGame extends Component {

  renderEndGame() {
    const { count, fruitType, orangesTotalNumber, applesTotalNumber } = this.props
    const isAppleType = fruitType === APPLE
    const totalFruitNumber = isAppleType ? applesTotalNumber : orangesTotalNumber
    const remainder = Math.abs(count - totalFruitNumber)

    if (count === totalFruitNumber) {
      return (
        <p className="endgame__winorlose">YOU HAVE WON </p>
      )
    }

    return (
      <div>
        <p className="endgame__winorlose">GAME OVER</p>
        <p>You counted <span className="endgame__numbers">{ count }</span> { fruitType }s</p>
        <p>The correct number of { fruitType }s was <span className="endgame__numbers">{ totalFruitNumber }</span></p>
        <p>You were <span className="endgame__numbers">{ remainder }</span> points away from winning the game</p>
      </div>
    )
  }

  renderResetButton() {
    return (
      <button
        className="endgame__resetbutton"
        onClick={ this.handleResetButtonClick }
      >RESTART
      </button>
    )
  }

  render() {
    const { hasGameFinished } = this.props

    if (!hasGameFinished) return null

    return (
      <div className="endgame">
        <div>{ this.renderEndGame() }</div>
        <div>{ this.renderResetButton() }</div>
      </div>
    )
  }

  handleResetButtonClick = () => {
    const { resetGame } = this.props

    resetGame()
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
    resetGame: () => {
      return dispatch({ type: RESTART_GAME })
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
