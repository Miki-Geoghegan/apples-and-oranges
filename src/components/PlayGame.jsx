import { Component } from 'react'
import { GAME_HAS_STARTED } from 'store/constants/gameStatus'
import { connect } from 'react-redux'

class GamePlay extends Component {

  renderChosenFruits() {
    const { startGame } = this.props

    if (!startGame) {
      return (
        <div>

        </div>
      )
    }

    return null
  }

  render() {
    return (
      <div>{ this.renderChosenFruits() }</div>
    )
  }

}

const mapStateToProps = ({ gameStatusReducer: { fruitType } }) => {
  return {
    fruitType
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startGame: () => {
      return dispatch({ type: GAME_HAS_STARTED })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePlay)

// connect to global store to check if game has started - if started, return something, else return null
