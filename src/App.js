import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Introduction from "./components/Introduction/Introduction";
import Tutorial from "./components/Introduction/Tutorial/Tutorial";
import Interface from "./components/Interface/Interface";

function App() {
  return (
    //   <div>
    //   </div>
    // );
    <div className="App">
      {/* <p>The Battleship Game</p> */}
      <Header />
      <Introduction />
      <Tutorial />
      <Interface />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
