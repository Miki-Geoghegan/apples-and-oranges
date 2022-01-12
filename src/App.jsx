import Count from 'components/Count'
import EndGame from 'components/EndGame'
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
        <GamePlay />
        <Count />
        <Timer />
        <EndGame />
      </div>
    </Provider>
  )
}

export default App
