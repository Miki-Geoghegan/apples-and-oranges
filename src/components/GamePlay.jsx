import { Component } from 'react'
import Fruit from 'components/Fruit'
import { connect } from 'react-redux'
import { APPLE, ORANGE } from 'utils/constants'

class GamePlay extends Component {

  renderFruit(type, idx) {
    return <Fruit key={ `${type}-${idx}` } type={ type } />
  }

  renderFruits() {
    const { applesTotalNumber, orangesTotalNumber } = this.props

    const applesArray = this.buildFruitsArray(applesTotalNumber, APPLE)
    const orangesArray = this.buildFruitsArray(orangesTotalNumber, ORANGE)

    return [...applesArray, ...orangesArray].map(this.renderFruit)
  }

  render() {
    const { hasGameStarted } = this.props

    if (!hasGameStarted) return null

    return (
      <div className="game-play">{ this.renderFruits() }</div>
    )
  }

  buildFruitsArray(fruitTotalNumber, fruitType) {
    return Array.from(Array(fruitTotalNumber)).map(() => {return fruitType})
  }

}

const mapStateToProps = ({ gameStatusReducer: { applesTotalNumber, orangesTotalNumber, hasGameStarted } }) => {
  return {
    applesTotalNumber,
    hasGameStarted,
    orangesTotalNumber
  }
}

export default connect(mapStateToProps)(GamePlay)

// connect to global store to check if game has started - if started, return something, else return null
