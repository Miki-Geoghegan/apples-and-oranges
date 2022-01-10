import { Component } from 'react'
import Fruit from 'components/Fruit'
import { APPLE, ORANGE } from 'utils/constants'
import { GAME_HAS_STARTED } from 'store/constants/gameStatus'
import { connect } from 'react-redux'

class GamePlay extends Component {

  renderFruit(type) {
    return <Fruit type={ type } />
  }

  renderFruits() {
    const { applesTotalNumber, orangesTotalNumber } = this.props

    const applesArray = Array.from(Array(applesTotalNumber)).map(() => {return APPLE})
    const orangesArray = Array.from(Array(orangesTotalNumber)).map(() => {return ORANGE})

    return [...applesArray, ...orangesArray].map(this.renderFruit)
  }

  render() {
    return (
      <div>{ this.renderFruits() }</div>
    )
  }

}

const mapStateToProps = ({ gameStatusReducer: { applesTotalNumber, orangesTotalNumber } }) => {
  return {
    applesTotalNumber,
    orangesTotalNumber
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
