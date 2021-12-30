import { Component } from 'react'
import { connect } from 'react-redux'

class GamePlay extends Component {

  renderChosenFruits() {
    return (
      <div>

      </div>
    )
  }

  render() {
    return (
      <div>{ this.renderChosenFruits() }</div>
    )
  }

}

export default GamePlay
