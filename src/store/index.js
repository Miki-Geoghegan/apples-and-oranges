import { composeWithDevTools } from 'redux-devtools-extension'
import { fruitsTotalMiddleware } from 'store/middlewares/fruitsTotals'
import rootReducer from 'store/reducers/index'
import { applyMiddleware, createStore } from 'redux'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(fruitsTotalMiddleware)))

export { store }
