import './App.css'
import FruitSelector from './Components/FruitSelector'
import { Provider } from 'react-redux'
import { store } from './store/index'

const App = () => {
  return (
    <Provider store={ store }>
      <div className="App">
        <FruitSelector />

      </div>
    </Provider>
  )
}

export default App
