import { Component } from 'react'
import apple from './appleImg.png'
import { connect } from 'react-redux'
import orange from './orangeImg.jpg'
import { APPLE, ORANGE } from '../utils/constants'
import { GAME_HAS_FINISHED, GAME_HAS_STARTED, SET_FRUIT_TYPE } from '../store/constants/gameStatus'

class FruitSelector extends Component {

  constructor(props) {
    super(props)
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
    return (
      <button>START</button>
    )
  }

  render() {
    return (
      <div>
        <h1>Select Your Fruit</h1>
        <div>{ this.renderUserOptions() }</div>
      </div>
    )
  }

  handleClick = ({ target: { value } }) => {
    const { chooseFruit } = this.props

    chooseFruit(value)
  }

  //   handleClick = (button, event) => {
  //     const { fruit } = this.state

  //     if (event.target === fruit[0]) {
  //       this.setState({
  //         fruit: [orange]
  //       })
  //     } this.setState({
  //       fruit: [apple]
  //     })

  //     return {
  //       button
  //     }
  //   }

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
