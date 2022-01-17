import { Component } from 'react'
import appleImg from 'assets/apple.png'
import { connect } from 'react-redux'
import orangeImg from 'assets/orange.png'
import { APPLE, ORANGE } from 'utils/constants'
import {
  GAME_HAS_STARTED,
  SET_FRUIT_TYPE
} from 'store/constants/gameStatus'

class FruitSelector extends Component {

  renderUserOption = ({ imgSrc, value }) => {
    return (
      <div className={ this.buildClassName(value) } key={ value } onClick={ this.handleFruitSelectorClick } >
        <img alt={ value } data-key={ value } src={ imgSrc } />
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

    if (hasGameStarted) return null

    return (
      <div className="fruitselector">
        <h1 className="fruitselector__title">Select Your Fruit</h1>
        <div>{ this.renderUserOptions() }</div>
        <div>{ this.renderStartButton() }</div>
      </div>
    )
  }

  handleFruitSelectorClick = ({ target: { dataset: { key } } }) => {
    const { chooseFruit } = this.props

    chooseFruit(key)
  }

  handleGameStartButtonClick = (evt) => {
    evt.stopPropagation()
    const { startGame } = this.props

    startGame()
  }

  buildClassName = (value) => {
    const { fruitType } = this.props
    let className = 'fruitselector__select'

    if (!fruitType) className += ` ${className}--hover`
    if (fruitType === value) className += ` ${className}--${fruitType}`

    return className
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
    startGame: () => {
      return dispatch({ type: GAME_HAS_STARTED })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FruitSelector)

// linting = set of rules/ conventions that the code has to run by
