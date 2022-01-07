import { Component } from 'react'
import { DECREASE_TIMER } from 'store/constants/timer'
import { GAME_HAS_STARTED } from 'store/constants/gameStatus'
import { connect } from 'react-redux'

class Timer extends Component {

  // if game has started, start timer

  componentDidUpdate({ hasGameStarted: prevHasGameStarted }, prevState) {
    const { hasGameStarted } = this.props

    if (!prevHasGameStarted & hasGameStarted) {
      this.runTimer()
    }
  }
  // componentWillUnmount() {
  //   clearInterval(this.myInterval)
  // }

  render() {
    const { time } = this.props

    return (
      <div>TIME REMAINING: { time } seconds</div>
    )
  }

  runTimer() {
    const { startTimer, time } = this.props
    console.log(time)

    this.myInterval = setInterval(() => {
      startTimer()
      console.log({ time })
      if (time <= 0) {
        clearInterval(this.myInterval)
      }
    }, 1000)
  }

}

const mapStateToProps = ({ timerReducer: { time }, gameStatusReducer: { hasGameStarted } }) => {
  return {
    hasGameStarted,
    time
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startGame: () => {
      return dispatch({ type: GAME_HAS_STARTED })
    },
    startTimer: () => {
      return dispatch({ type: DECREASE_TIMER })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
