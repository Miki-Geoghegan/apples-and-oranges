import { Component } from 'react'
import apple from 'assets/appleImg.png'
import { connect } from 'react-redux'
import orange from 'assets/orangeImg.jpg'
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

  renderUserOptions() {
    return (
      <div className="fruit-container">
        <div className="fruit-selection">
          <img alt={ ORANGE } src={ orange } />
          <button onClick={ this.handleFruitSelectorClick } value={ ORANGE }>
            Choose Oranges
          </button>
        </div>
        <div className="fruit-selection">
          <img alt={ APPLE } src={ apple } />
          <button onClick={ this.handleFruitSelectorClick } value={ APPLE }>
            Choose Apples
          </button>
        </div>
      </div>
    )
  }

  renderButton() {
    const { fruitType } = this.props
    const { message } = this.state

    return (
      <button
        disabled={ !Boolean(fruitType) }
        onClick={ this.handleGameStartButtonClick }
      >
        { message ? 'START' : 'STOP' }
      </button>
    )
  }

  render() {
    return (
      <div>
        <h1>Select Your Fruit</h1>
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
