const initialCountState = {
  count: 0
}

const countReducer = (state = initialCountState, action) => {
  switch (action.type) {
  case 'INCREASE-COUNT':
    return {
      ...state,
      count: state.count + 1
    }
  case 'DECREASE-COUNT':
    return {
      ...state,
      count: state.count - 1
    }
  default: return state
  }
}

export default countReducer
