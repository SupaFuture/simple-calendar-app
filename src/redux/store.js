import { createStore } from "redux";
import rootReducer from "./reducers";
import { compose } from 'redux'
const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhances());
export default store