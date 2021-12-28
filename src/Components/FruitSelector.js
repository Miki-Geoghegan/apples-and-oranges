import { Component } from "react";
import orange from "./orangeImg.jpg"
import apple from "./appleImg.png"



class FruitSelector extends Component {
    constructor() {
        super()
        this.state = {
            fruit: [orange, apple],
        }
    }

componentDidMount() {
    console.log('ready to select')
}


renderUserOptions() {
    const { fruit } = this.state
    return(
        <div>
            <img src = { fruit[0] } alt = "Orange"/>
            <img src = { fruit[1] } alt = "Apple"/>
            {/* <img onClick= {this.handleClick(this.renderButton)} src = {fruit[0]}/>
            <img onClick= {this.handleClick(this.renderButton)} src = {fruit[1]}/> */}
        </div>

    )
}

renderButton() {
    return(
        <button>START</button>
    )
}


render() {
    return (
        <div>
            <h1>Select Your Fruit</h1>
            <div>{this.renderUserOptions()}</div>
        </div>
    )
}



handleClick = (button, e) => {
    const { fruit } = this.state
    if (e.target == fruit[0]) {
        this.setState ({
            fruit: ["orange"]
        }) 
    } this.setState ({
        fruit: ["apple"]
    })
    return {
        button
    }
} 

}

export default FruitSelector

// linkting = set of rules/ conventions that the code has to run by