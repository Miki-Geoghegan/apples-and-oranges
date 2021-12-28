import './App.css';
import { Provider } from "react-redux"
import { store } from "./store/index"
import FruitSelector from "./Components/FruitSelector"

const App = () => {
  return (
    <Provider store={store}>
    <div className="App">
      <FruitSelector />

    </div>
    </Provider>
  );
}

export default App;
