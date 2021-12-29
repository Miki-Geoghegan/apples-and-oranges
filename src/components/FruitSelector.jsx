import { Component } from 'react'
import apple from '../assets/appleImg.png'
import { connect } from 'react-redux'
import orange from '../assets/orangeImg.jpg'
import { APPLE, ORANGE } from '../utils/constants'
import { GAME_HAS_FINISHED, GAME_HAS_STARTED, SET_FRUIT_TYPE } from '../store/constants/gameStatus'

class FruitSelector extends Component {

  constructor(props) {
    super(props)
    this.state = {
      buttonEnabled: false
    }
  }

  renderUserOptions() {
    return (
      <div className = "fruit-container">
        <div className = "fruit-selection">
          <img alt = { ORANGE } src = { orange } />
          <button onClick= { this.handleClick } value = { ORANGE }>Choose Oranges</button>
        </div>
        <div className = "fruit-selection">
          <img alt = { APPLE } src = { apple } />
          <button onClick= { this.handleClick } value = { APPLE }>Choose Apples</button>
        </div>

        { /* <img onClick= {this.handleClick(this.renderButton)} src = {fruit[0]}/>
            <img onClick= {this.handleClick(this.renderButton)} src = {fruit[1]}/> */ }
      </div>

    )
  }

  renderButton() {
    const { buttonEnabled } = this.state

    if (!buttonEnabled) {
      return (
        <button disabled = { true }>START</button>
      )
    }

    return (
      <button disabled = { false }>START</button>
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

  handleClick = ({ target: { value } }) => {
    const { chooseFruit } = this.props
    const { buttonEnabled } = this.state

    chooseFruit(value)
    this.setState({ buttonEnabled: true })
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    chooseFruit: (payload) => {
      return dispatch({ payload, type: SET_FRUIT_TYPE })
    }
  }
}

export default connect(null, mapDispatchToProps)(FruitSelector)

// linkting = set of rules/ conventions that the code has to run by
