import Count from 'components/Count'
import FruitSelector from 'components/FruitSelector'
import GamePlay from 'components/GamePlay'
import { Provider } from 'react-redux'
import Timer from 'components/Timer'
import { store } from 'store/index'

const App = () => {
  return (
    <Provider store={ store }>
      <div className="App">
        <FruitSelector />
        <Count />
        <Timer />
        <GamePlay />
      </div>
    </Provider>
  )
}

export default App
