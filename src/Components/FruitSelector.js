import { Component } from 'react'
import apple from './appleImg.png'
import { connect } from 'react-redux'
import orange from './orangeImg.jpg'

class FruitSelector extends Component {

  constructor(props) {
    super(props)
  }

  renderUserOptions() {
    const { fruit } = this.props

    return (
      <div className = "fruit-container">
        <div className = "fruit-selection">
          <img alt = "Orange" src = { orange } />
          <button onClick= { this.handleClick() } >Choose Oranges</button>
        </div>
        <div className = "fruit-selection">
          <img alt = "Apple" src = { apple } />
          <button onClick= { this.handleClick() } >Choose Apples</button>
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

  handleClick = () => {
    console.log('hi')
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

export default FruitSelector

// linkting = set of rules/ conventions that the code has to run by
