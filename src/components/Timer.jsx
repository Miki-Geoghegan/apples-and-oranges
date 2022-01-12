import { Component } from 'react'
import { DECREASE_TIMER } from 'store/constants/timer'
import { connect } from 'react-redux'
import { GAME_HAS_FINISHED, GAME_HAS_STARTED } from 'store/constants/gameStatus'

class Timer extends Component {

  componentDidUpdate({ hasGameStarted: prevHasGameStarted }, prevState) {
    const { finishGame, hasGameStarted, time } = this.props

    if (!prevHasGameStarted && hasGameStarted) {
      this.runTimer()
    }
    if (time === 0) {
      clearInterval(this.myInterval)
      finishGame()
    }
  }

  render() {
    const { hasGameStarted, time } = this.props

    if (!hasGameStarted) return null

    return (
      <div className="timer">TIME REMAINING: { time } seconds</div>
    )
  }

  runTimer() {
    const { startTimer } = this.props

    this.myInterval = setInterval(() => {
      startTimer()
    }, 1000)
  }

}

const mapStateToProps = ({ timerReducer: { time }, gameStatusReducer: { hasGameStarted, hasGameFinished } }) => {
  return {
    hasGameFinished,
    hasGameStarted,
    time
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    finishGame: () => {
      return dispatch({ type: GAME_HAS_FINISHED })
    },
    startGame: () => {
      return dispatch({ type: GAME_HAS_STARTED })
    },
    startTimer: () => {
      return dispatch({ type: DECREASE_TIMER })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
