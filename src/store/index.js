import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore } from 'redux'
import rootReducer from 'store/reducers/index'

const store = createStore(rootReducer, composeWithDevTools())

export { store }
