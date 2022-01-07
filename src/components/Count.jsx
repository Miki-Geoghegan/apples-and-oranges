import { GAME_HAS_STARTED } from 'store/constants/gameStatus'
import { connect } from 'react-redux'
import { DECREASE_COUNT, INCREASE_COUNT } from 'store/constants/count'
import React, { Component } from 'react'

class Count extends Component {

  renderCurrentCount() {
    const { decreaseCount, increaseCount, count, hasGameStarted } = this.props

    if (hasGameStarted) {
      return (
        <div>
          <div>{ count }</div>
          <div>
            <button onClick={ increaseCount }>+</button>
            <button onClick={ decreaseCount }>-</button>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div>{ this.renderCurrentCount() }</div>
    )
  }

}

const mapStateToProps = ({ countReducer: { count }, gameStatusReducer: { hasGameStarted } }) => {
  return {
    count,
    hasGameStarted
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    decreaseCount: () => {
      return dispatch({ type: DECREASE_COUNT })
    },
    increaseCount: () => {
      return dispatch({ type: INCREASE_COUNT })
    },
    startGame: () => {
      return dispatch({ type: GAME_HAS_STARTED })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count)
