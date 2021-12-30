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

  constructor(props) {
    super(props)
    this.state = {
      message: 'START'
    }
  }

  renderUserOption = ({ imgSrc, value }) => {
    return (
      <div className="fruitselector__select" key={ value }>
        <img alt={ value } src={ imgSrc } />
        <button onClick={ this.handleFruitSelectorClick } value={ value }>
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
      <div className="fruit-container">
        { fruits.map(this.renderUserOption) }
      </div>
    )
  }

  renderButton() {
    const { fruitType } = this.props
    const { message } = this.state

    return (
      <button
        className="fruitselector__button"
        disabled={ !Boolean(fruitType) }
        onClick={ this.handleGameStartButtonClick }
      >
        { message ? 'START' : 'STOP' }
      </button>
    )
  }

  render() {
    return (
      <div className="fruitselector">
        <h1 className="fruitselector__title">Select Your Fruit</h1>
        <div>{ this.renderUserOptions() }</div>
        <div>{ this.renderButton() }</div>
      </div>
    )
  }

  handleFruitSelectorClick = ({ target: { value } }) => {
    const { chooseFruit } = this.props

    chooseFruit(value)
  }

  handleGameStartButtonClick = () => {
    const { startGame, finishGame } = this.props
    const { message } = this.state

    if (message === 'START') {
      startGame()
      this.setState(prevState => {
        return {
          message: !prevState.message
        }
      })
    }
    finishGame()
    this.setState(prevState => {
      return {
        message: !prevState.message
      }
    })
  }

}

const mapStateToProps = ({ fruitTypeReducer: { fruitType } }) => {
  return {
    fruitType
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

// linkting = set of rules/ conventions that the code has to run by
