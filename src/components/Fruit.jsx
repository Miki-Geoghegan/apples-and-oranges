import appleImg from 'assets/apple.png'
import orangeImg from 'assets/orange.png'
import { APPLE, ORANGE } from 'utils/constants'
import React, { Component } from 'react'

class Fruit extends Component {

  // componentDidUpdate(prevProps, { isActive: prevIsActive }) {
  //   const { isActive } = this.state;

  //   if (isActive !== prevIsActive) {
  //     const chance = Math.random() > 0.66;
  //     this.setState({ isGolden: chance });
  //   }
  // }

  renderUserOption = ({ imgSrc, value }) => {
    return (
      <div className="fruitselector__select" key={ value }>
        <img alt={ value } src={ imgSrc } />
      </div>
    )
  }

  renderUserOptions() {
    const fruits = [
      { imgSrc: orangeImg, value: ORANGE },
      { imgSrc: appleImg, value: APPLE }
    ]

    return (
      <div className="fruitcontainer">
        { fruits.map(this.renderUserOption) }
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className="move-fruit move-fruit-1">fruit 1</div>
        <div className="move-fruit move-fruit-2">fruit 2</div>
        <div className="move-fruit move-fruit-3">fruit 3</div>
      </div>
    )
  }

}

export default Fruit
