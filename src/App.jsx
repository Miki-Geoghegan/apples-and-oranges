import Count from 'components/Count'
import Fruit from 'components/Fruit'
import FruitSelector from 'components/FruitSelector'
import { Provider } from 'react-redux'
import Timer from 'components/Timer'
import { store } from 'store/index'

const App = () => {
  return (
    <Provider store={ store }>
      <div className="App">
        <FruitSelector />
        <Fruit />
        <Count />
        <Timer />

      </div>
    </Provider>
  )
}

export default App
