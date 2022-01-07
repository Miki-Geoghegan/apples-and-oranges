import { Component } from 'react'
import appleImg from 'assets/apple.png'
import { connect } from 'react-redux'
import orangeImg from 'assets/orange.png'
import { APPLE, ORANGE } from 'utils/constants'
import {
  GAME_HAS_FINISHED,
  GAME_HAS_STARTED,
  SET_FRUIT_TYPE
} from 'store/constants/gameStatus'

class FruitSelector extends Component {

  renderUserOption = ({ imgSrc, value }) => {
    return (
      <div className="fruitselector__select" key={ value }>
        <img alt={ value } src={ imgSrc } />
        <button className="fruitselector__selectButton" onClick={ this.handleFruitSelectorClick } value={ value }>
            Choose { value }
        </button>
      </div>
    )
  }

  renderUserOptions() {
    const fruits = [
      { imgSrc: orangeImg, value: ORANGE },
      { imgSrc: appleImg, value: APPLE }
    ]

    return (
      <div className="fruitcontainer">
        { fruits.map(this.renderUserOption) }
      </div>
    )
  }

  renderCount() {
    const { count } = this.props

    return (
      <div>count: { count }</div>
    )
  }

  renderStartButton() {
    const { fruitType } = this.props

    return (
      <button
        className="fruitselector__startbutton"
        disabled= { !Boolean(fruitType) }
        onClick={ this.handleGameStartButtonClick }
      >START
      </button>
    )
  }

  render() {
    const { hasGameStarted } = this.props

    if (!hasGameStarted) {
      return (
        <div className="fruitselector">
          <h1 className="fruitselector__title">Select Your Fruit</h1>
          <div>{ this.renderUserOptions() }</div>
          <div>{ this.renderStartButton() }</div>
        </div>
      )
    }

    return (
      <div>{ this.renderCount() }</div>
    )
  }

  handleFruitSelectorClick = ({ target: { value } }) => {
    const { chooseFruit } = this.props

    chooseFruit(value)
  }

  handleGameStartButtonClick = () => {
    const { startGame } = this.props

    startGame()
  }

}

const mapStateToProps = ({ countReducer: { count }, gameStatusReducer: { fruitType, hasGameStarted } }) => {
  return {
    count,
    fruitType,
    hasGameStarted
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    chooseFruit: (payload) => {
      return dispatch({ payload, type: SET_FRUIT_TYPE })
    },
    finishGame: () => {
      return dispatch({ type: GAME_HAS_FINISHED })
    },
    startGame: () => {
      return dispatch({ type: GAME_HAS_STARTED })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FruitSelector)

// linting = set of rules/ conventions that the code has to run by

// create fruit component - when game starts, create function that returns a random number (in range) of both apples or oranges
// A fruits component should be created - a wrapper for the fruits
// counting event listener
// start button should only start the game - counter will end the game when reaches 0 (consider how to trigger the ending of the game from the timer component)
