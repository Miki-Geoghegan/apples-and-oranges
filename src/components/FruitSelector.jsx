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
    const { message } = this.state

    return (
      <button
        className="fruitselector__startbutton"
        disabled= { !Boolean(fruitType) }
        onClick={ this.handleGameStartButtonClick }
      >
        { message ? 'START' : 'STOP' }
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
    const { startGame, finishGame, hasGameStarted } = this.props
    const { message } = this.state

    if (!hasGameStarted) {
      startGame()
      this.setState({ message: !message })
    }
    finishGame()
  }

}
//   if (message === 'START') {
//     startGame()
//     this.setState({ message: !message })
//   }
//   finishGame()
// }

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

