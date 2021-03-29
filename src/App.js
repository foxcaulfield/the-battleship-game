import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Introduction from "./components/Introduction/Introduction";

import Interface from "./components/Interface/Interface";
import { Provider } from "react-redux";
import store from "./store/reduxStore";
// import waves from "./utils/wave.svg";
import Wave from "./utils/Wave";
import classNames from "classnames";

function App() {
  return (
    <div
      className={classNames(
        "App",
        { themeBlue: store.getState().boardReducer.theme === 1 },
        { themeGreen: store.getState().boardReducer.theme === 2 },
        { themeOrange: store.getState().boardReducer.theme === 3 }
      )}
    >
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
