import "./App.css";
import Header from "./components/Header/Header";
import Introduction from "./components/Introduction/Introduction";
import Tutorial from "./components/Introduction/Tutorial/Tutorial";
import Interface from "./components/Interface/Interface";
import { Provider } from "react-redux";
import store from "./store/reduxStore";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Introduction />
        <Tutorial />
        <Interface />
      </Provider>
    </div>
  );
}

export default App;
