import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Introduction from "./components/Introduction/Introduction";
import Interface from "./components/Interface/Interface";
import { Provider } from "react-redux";
import store from "./store/reduxStore";
import Wave from "./utils/Wave/Wave";
import classNames from "classnames";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/Themes/GlobalStyles";
import {
  darkTheme,
  themeOrange,
  themeBlue,
  themeGreen,
} from "./components/Themes/Themes";

function App() {
  const [theme, changeTheme] = useState(darkTheme);

  function themeToggler() {
    theme === themeOrange
      ? changeTheme(themeGreen)
      : theme === themeGreen
      ? changeTheme(themeBlue)
      : theme === themeBlue
      ? changeTheme(darkTheme)
      : changeTheme(themeOrange);
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className={classNames("App")}>
        <Provider store={store}>
          <Header toggleTheme={themeToggler} />
          <Introduction />
          <Interface />
          <div className="footerWaves">
            <Wave />
          </div>
        </Provider>
      </div>
    </ThemeProvider>
  );
}

export default App;
