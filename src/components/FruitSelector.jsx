import { Component } from 'react'
import apple from '../assets/appleImg.png'
import { connect } from 'react-redux'
import orange from '../assets/orangeImg.jpg'
import { APPLE, ORANGE } from '../utils/constants'
import {
  GAME_HAS_FINISHED,
  GAME_HAS_STARTED,
  SET_FRUIT_TYPE,
} from '../store/constants/gameStatus'

class FruitSelector extends Component {
  renderUserOptions() {
    return (
      <div className='fruit-container'>
        <div className='fruit-selection'>
          <img alt={ORANGE} src={orange} />
          <button onClick={this.handleFruitSelectotClick} value={ORANGE}>
            Choose Oranges
          </button>
        </div>
        <div className='fruit-selection'>
          <img alt={APPLE} src={apple} />
          <button onClick={this.handleFruitSelectotClick} value={APPLE}>
            Choose Apples
          </button>
        </div>

        {/* <img onClick= {this.handleFruitSelectotClick(this.renderButton)} src = {fruit[0]}/>
            <img onClick= {this.handleFruitSelectotClick(this.renderButton)} src = {fruit[1]}/> */}
      </div>
    )
  }

  renderButton() {
    const { fruitType } = this.props

    return (
      <button
        disabled={!Boolean(fruitType)}
        onClick={this.handleGameStartButtonClick}
      >
        START
      </button>
    )
  }

  render() {
    return (
      <div>
        <h1>Select Your Fruit</h1>
        <div>{this.renderUserOptions()}</div>
        <div>{this.renderButton()}</div>
      </div>
    )
  }

  handleFruitSelectotClick = ({ target: { value } }) => {
    const { chooseFruit } = this.props

    chooseFruit(value)
  }

  handleGameStartButtonClick = () => {
    const { startGame } = this.props

    startGame()
  }
}

const mapStateToProps = ({ fruitTypeReducer: { fruitType } }) => {
  return {
    fruitType,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    chooseFruit: (payload) => {
      return dispatch({ payload, type: SET_FRUIT_TYPE })
    },
    startGame: () => {
      return dispatch({ type: GAME_HAS_STARTED })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FruitSelector)

// linkting = set of rules/ conventions that the code has to run by
