import { createStore } from "redux";
import rootReducer from "./reducers/gameStatusReducer";


const store = createStore( rootReducer )

export { store }