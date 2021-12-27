import { Component } from "react";
//import orange from ""
//import apple from ""


class FruitSelector extends Component {
    constructor() {
        super()
        this.state = {
            fruit: ["orange", "apple"],
        }
    }

componentDidMount() {
    console.log('ready to select')
}


renderUserSelection() {
    const { fruit } = this.state
    return(
        <div>
            <img onClick= {this.handleClick(this.renderButton)} src = {fruit[0]}></img>
            <img onClick= {this.handleClick(this.renderButton)} src = {fruit[1]}></img>
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
            <div>{this.renderUserSelection}</div>

            
        </div>
    )
}



handleClick = (button) => {
    const { fruit } = this.state
    if (img.src == fruit[0]) {
        this.setState ({
            fruit: [orange]
        }) 
    } this.setState ({
        fruit: [apple]
    })
    return {
        button
    }
} 

}

export default FruitSelector