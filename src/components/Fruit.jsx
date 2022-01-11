import appleImg from 'assets/apple.png'
import orangeImg from 'assets/orange.png'
import { randomIntFromRange } from 'utils/functions'
import { APPLE, ORANGE } from 'utils/constants'
import React, { Component } from 'react'

const fruitsImages = { [APPLE]: appleImg, [ORANGE]: orangeImg }

class Fruit extends Component {

  render() {
    const { type } = this.props

    return (
      <div className="fruit">
        <div
          className="fruit__container"
          style={{
            top: `${randomIntFromRange(0, 90)}%`
          }}>
          <img
            className="fruit__image"
            src={ fruitsImages[type] }
          />
        </div>
      </div>
    )
  }

}

// is the 'type' in the Fruit component is being passed from the GamePlay component but how do we know what it refers to? Where is the value coming from?

// in this img tag from Fruit component : <img className="fruit__image" src={ fruitsImages[type] }/>, what exactly is the type referring?

export default Fruit
