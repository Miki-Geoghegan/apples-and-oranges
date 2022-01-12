import { GAME_HAS_STARTED } from 'store/constants/gameStatus'
import { connect } from 'react-redux'
import { DECREASE_COUNT, INCREASE_COUNT } from 'store/constants/count'
import React, { Component } from 'react'

class Count extends Component {

  renderCurrentCount() {
    const { decreaseCount, increaseCount, count } = this.props

    return (
      <div>
        <div>{ count }</div>
        <div>
          <button className="count__button" onClick={ increaseCount }>+</button>
          <button className="count__button" onClick={ decreaseCount }>-</button>
        </div>
      </div>
    )
  }

  render() {
    const { hasGameStarted } = this.props

    if (!hasGameStarted) return null

    return (
      <div className="count">{ this.renderCurrentCount() }</div>
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

// logic of how to end the game - how to tell the user if they are correct
// reset game at the end - every reducer once it gets reset game function will have to set to the initial state
// add under timer - the fruit that is being counted for, dependent on the value selected
