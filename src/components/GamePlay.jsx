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

// Essentially, in the GamePlay component, in the buildFruitsArray function we are putting a number in and a fruit type, then building an array with the total number, mapping through it and for each number, returning the fruitType (orange or apple as a string)... so essentially, we will be left with ['apple', 'apple', 'apple', 'apple', 'apple'] etc. and the same with orange. In the renderFruits function, we then concat the new apples and oranges arrays and map through them, each time returning the Fruit component, which provides an image at a random height inside a container. If the Fruit component reads 'apple' it will provide the apple img (const fruitsImages = { [APPLE]: appleImg, [ORANGE]: orangeImg }), and same for orange. Still not entirely clear on how the 'type' is working

const mapStateToProps = ({ gameStatusReducer: { applesTotalNumber, orangesTotalNumber, hasGameStarted } }) => {
  return {
    applesTotalNumber,
    hasGameStarted,
    orangesTotalNumber
  }
}

export default connect(mapStateToProps)(GamePlay)

// connect to global store to check if game has started - if started, return something, else return null
