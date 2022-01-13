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

// whatever you put to listen for on component did mount, replicate it on the component did unmount but remove it - this is important

// edit text, timer etc. to make nicer, more user friendly

// how will the count react with the restart of the game?
// make sure that the counter does not go down to minus numbers, past 0
