import { GAME_HAS_STARTED } from 'store/constants/gameStatus'
import { connect } from 'react-redux'
import { DECREASE_COUNT, INCREASE_COUNT } from 'store/constants/count'
import React, { Component } from 'react'

class Count extends Component {

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick)
    document.addEventListener('contextmenu', this.handleDocumentContextMenu)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick)
    document.removeEventListener('contextmenu', this.handleDocumentContextMenu)
  }

  renderCurrentCount() {
    const { count, fruitType } = this.props

    return (
      <div>
        <p className="count__fruitTypeCounted">You are counting { fruitType }s</p>
        <div className="count__totalCounted">{ count }</div>
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

  handleDocumentClick = () => {
    const { hasGameStarted, increaseCount } = this.props

    if (hasGameStarted) increaseCount()
  }

  handleDocumentContextMenu = (evt) => {
    evt.preventDefault()

    const { hasGameStarted, decreaseCount } = this.props

    if (hasGameStarted) decreaseCount()
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

