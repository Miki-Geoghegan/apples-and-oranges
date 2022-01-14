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

// NOTE: whatever you put to listen for on component did mount, replicate it on the component did unmount but remove it - this is important

// edit text, timer etc. to make nicer, more user friendly

// how will the count react with the restart of the game?
// make sure that the counter does not go down to minus numbers, past 0
