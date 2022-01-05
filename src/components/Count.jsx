import { connect } from 'react-redux'
import { DECREASE_COUNT, INCREASE_COUNT } from 'store/constants/count'
import React, { Component } from 'react'

class Count extends Component {

  renderCurrentCount() {
    const { decreaseCount, increaseCount } = this.props
    const { count } = this.props

    return (
      <div>
        <div>{ count }</div>
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

export default connect(null, mapDispatchToProps)(Count)
