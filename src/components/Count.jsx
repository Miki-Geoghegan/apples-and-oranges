import { GAME_HAS_STARTED } from 'store/constants/gameStatus'
import { connect } from 'react-redux'
import { DECREASE_COUNT, INCREASE_COUNT } from 'store/constants/count'
import React, { Component } from 'react'

class Count extends Component {

  renderCurrentCount() {
    const { decreaseCount, increaseCount, count, fruitType } = this.props

    return (
      <div>
        <p>You are counting { fruitType }s</p>
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

const mapStateToProps = ({ countReducer: { count }, gameStatusReducer: { hasGameStarted, fruitType } }) => {
  return {
    count,
    fruitType,
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

// reset game at the end - every reducer once it gets reset game function will have to set to the initial state
// speed of the fruits to be variable & faster in general
// if the user didn't get the number correct, tell them how far off they were and what the correct number was - difference between correct number and the guess: method that lives on the Math method (abs)
// using click of the mouse as an event listener, to count fruit in place of buttons
// reset button - action type that will impact different reducers (not exclusive to one reducer) - button to trigger initial state to return - add a new constant and every reducer should be listening for this action type, if this gets triggered, all will revert to initial state
