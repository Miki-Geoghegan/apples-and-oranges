 import { combineReducers } from "redux"

 const initialState = { 
     count: 0
 }

 const countReducer = (state = initialState, action) => {
     switch (action.type) {
         case "INCREASE-COUNT":
             return {
                 ...state,
                 count: state.count + 1
             }
          case "DECREASE-COUNT":
              return {
                  ...state,
                  count: state.count - 1
              }
         default: state
     }
    
 }

 const unknownReducer = (state = initialState, action) => {
     switch (action.type) {
         case "UNKNOWN":
             return {
                 ...state,
                 count: state.count * 1
             }
         default: state
     }
 }


 export default combineReducers({ countReducer, unknownReducer})