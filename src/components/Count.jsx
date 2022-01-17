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
        <p className="count__fruittypecounted">You are counting { fruitType }s</p>
        <p>Click <span className="count__counter">+</span></p>
        <p>Right Click <span className="count__counter">-</span></p>
        <div className="count__totalcounted">{ count }</div>
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
    const { hasGameFinished, hasGameStarted, increaseCount } = this.props

    if (hasGameStarted && !hasGameFinished) increaseCount()
  }

  handleDocumentContextMenu = (evt) => {
    evt.preventDefault()

    const { hasGameFinished, hasGameStarted, decreaseCount, count } = this.props

    if (hasGameStarted && count > 0 && !hasGameFinished) decreaseCount()
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

// add click to count, rightclick to decrease count
