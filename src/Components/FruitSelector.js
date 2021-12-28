import { Component } from 'react'
import apple from './appleImg.png'
import orange from './orangeImg.jpg'

class FruitSelector extends Component {

  constructor() {
    super()
    this.state = {
      fruit: [orange, apple]
    }
  }

  renderUserOptions() {
    const { fruit } = this.state

    return (
      <div>
        <img alt = "Orange" src = { fruit[0] } />
        <img alt = "Apple" src = { fruit[1] } />
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

  handleClick = (button, event) => {
    const { fruit } = this.state

    if (event.target === fruit[0]) {
      this.setState({
        fruit: [orange]
      })
    } this.setState({
      fruit: [apple]
    })

    return {
      button
    }
  }

}

export default FruitSelector

// linkting = set of rules/ conventions that the code has to run by
