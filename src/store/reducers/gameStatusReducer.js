 import { combineReducers } from "redux"

 const initialState = {
     hasGameStarted: false,
     hasGameFinished: false,
     fruitType: null
 }

 const initialCountState = { 
     count: 0
 }

 const initialUnknownState = {
     count: 2
 }

 const fruitTypeReducer = (state = initialState, action) => {
     switch(action.type) {
         case "SET-FRUIT-TYPE":
             return {
                 ...state,
                 fruitType: action.payload
             }
             default: return state
     } 
 }

 const countReducer = (state = initialCountState, action) => {
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
              };
         default: return state
     }
    
 }

 const unknownReducer = (state = initialUnknownState, action) => {
     switch (action.type) {
         case "UNKNOWN":
             return {
                 ...state,
                 count: state.count * 1
             };
         default: return state
     }
 }


 export default combineReducers({ fruitTypeReducer, countReducer, unknownReducer})