const initialCountState = {
  count: 0
}

// const initialUnknownState = {
//   count: 2
// }

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

// const unknownReducer = (state = initialUnknownState, action) => {
//   switch (action.type) {
//   case 'UNKNOWN':
//     return {
//       ...state,
//       count: state.count * 1
//     }
//   default: return state
//   }
// }

export default countReducer
