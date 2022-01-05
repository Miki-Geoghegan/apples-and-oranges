import { Component } from 'react'
import { DECREASE_TIMER } from 'store/constants/timer'
import { connect } from 'react-redux'

class Timer extends Component {

  componentDidMount() {
    const { startTimer } = this.props

    this.myInterval = setInterval(() => {
      startTimer()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }

  render() {
    const { time } = this.props

    return (
      <div>TIME REMAINING: { time } seconds</div>
    )
  }

}

const mapStateToProps = ({ timerReducer: { time } }) => {
  return {
    time
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startTimer: () => {
      return dispatch({ type: DECREASE_TIMER })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
