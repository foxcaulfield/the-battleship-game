import "./App.css";
import Header from "./components/Header/Header";
import Introduction from "./components/Introduction/Introduction";

import Interface from "./components/Interface/Interface";
import { Provider } from "react-redux";
import store from "./store/reduxStore";
// import waves from "./utils/wave.svg";
import Wave from "./utils/Wave";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Introduction />
        <Interface />
        <div className="footerWaves">
          <Wave />
        </div>
      </Provider>
    </div>
  );
}

export default App;
