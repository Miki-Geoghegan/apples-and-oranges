import { Component } from 'react'
import { connect } from 'react-redux'
import { INCREASE_COUNT, DECREASE_COUNT } from '../utils/constants'

class Count extends Component {

  renderCurrentCount() {
    const { count, decreaseCount, increaseCount } = this.props

    return (
      <div>
        <div>
          <button onClick={ increaseCount }>+</button>
          <button onClick={ decreaseCount }>-</button>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>{ this.renderCurrentCount() }</div>

    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    decreaseCount: () => {
      return dispatch({ type: DECREASE_COUNT })
    },
    increaseCount: () => {
      return dispatch({ type: INCREASE_COUNT })
    }
  }
}

const connectRedux = connect(null, mapDispatchToProps)

export default connectRedux(Count)
