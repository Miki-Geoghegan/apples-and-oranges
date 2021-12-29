import 'styles/App.scss'
import Count from 'components/Count'
import FruitSelector from 'components/FruitSelector'
import { Provider } from 'react-redux'
import { store } from 'store/index'

const App = () => {
  return (
    <Provider store={ store }>
      <div className="App">
        <FruitSelector />
        <Count />

      </div>
    </Provider>
  )
}

export default App
