import appleImg from 'assets/apple.png'
import orangeImg from 'assets/orange.png'
import { APPLE, ORANGE } from 'utils/constants'
import React, { Component } from 'react'

const fruitsImages = { [APPLE]: appleImg, [ORANGE]: orangeImg }

class Fruit extends Component {

  render() {
    const { type } = this.props

    return (
      <div>
        <img src={ fruitsImages[type] } />
      </div>
    )
  }

}

export default Fruit
