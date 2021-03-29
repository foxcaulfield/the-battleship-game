import "./App.css";
import Header from "./components/Header/Header";
import Introduction from "./components/Introduction/Introduction";
import Tutorial from "./components/Introduction/Tutorial/Tutorial";
import Interface from "./components/Interface/Interface";
import { Provider } from "react-redux";
import store from "./store/reduxStore";
import Popup from "./utils/Popup";
import React, { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div>
        {isOpen && <Popup content={<Tutorial />} handleClose={togglePopup} />}
      </div>
      <div className="App">
        <Provider store={store}>
          <Header handleClose={togglePopup} />
          <Introduction />
          <Interface />
        </Provider>
      </div>
    </div>
  );
}

export default App;
