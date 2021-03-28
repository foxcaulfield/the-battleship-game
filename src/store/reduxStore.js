import { createStore, combineReducers } from "redux";
import boardReducer from "./reducers/boardReducer";
import controlButtonsReducer from "./reducers/controlButtonsReducer";

let reducers = combineReducers({
  boardReducer,
  controlButtonsReducer,
});

const store = createStore(reducers);

window.store = store;

export default store;
