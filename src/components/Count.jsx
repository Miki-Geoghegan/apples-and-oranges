import { GAME_HAS_STARTED } from 'store/constants/gameStatus'
import { connect } from 'react-redux'
import { DECREASE_COUNT, INCREASE_COUNT } from 'store/constants/count'
import React, { Component } from 'react'

class Count extends Component {

  renderCurrentCount() {
    const { decreaseCount, increaseCount, count, fruitType } = this.props

    return (
      <div>
        <p className="count__fruitTypeCounted">You are counting { fruitType }s</p>
        <div className="count__totalCounted">{ count }</div>
        <div>
          <button className="count__button" onClick={ increaseCount }>+</button>
          <button className="count__button" onClick={ decreaseCount }>-</button>
        </div>
      </div>
    )
  }

  render() {
    const { hasGameFinished, hasGameStarted } = this.props

    if (!hasGameStarted || hasGameFinished) return null

    return (
      <div className="count">{ this.renderCurrentCount() }</div>
    )
  }

}

const mapStateToProps = ({ countReducer: { count }, gameStatusReducer: { hasGameFinished, hasGameStarted, fruitType } }) => {
  return {
    count,
    fruitType,
    hasGameFinished,
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

// work out why NAN coming on restart - when game has started something goes wrong with the time (check the button and what happens)
// work out how to center the reset button, remove all else from screen

// using click of the mouse as an event listener, to count fruit in place of buttons
// edit text, timer etc. to make nicer, more user friendly

