import { createStore, combineReducers } from "redux";
import viewFieldReducer from "./reducers/viewFieldReducer";
import controlButtonsReducer from "./reducers/controlButtonsReducer";

let reducers = combineReducers({
  viewFieldReducer,
  controlButtonsReducer,
});

const store = createStore(reducers);

window.store = store;

export default store;
