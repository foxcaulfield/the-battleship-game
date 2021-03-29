import { connect } from "react-redux";
function Stats(props) {
  return (
    <section id="stats" class="hide">
      {props.boardReducer.isWin ? "win" : "not win"}
      <br />
      {props.boardReducer.isGameOver ? "game over" : "not gameover"}
      <br />
      ship position is:
      {props.boardReducer.shipPosition}
      <br />
      <span className="emoji" role="img" aria-label="heart">
        ❤️
      </span>
      {props.boardReducer.attemptsLeft}
      <br />
      Guesses:
      {props.boardReducer.guessesArray}
      <br />
      {/* <div id="statBlock1">
        <p id="statGuesses">Guesses: 0</p>
        <p id="statHits">Hits: 0</p>
        <p id="statAccuracy">Accuracy: 0.00</p>
      </div>

      <div id="statBlock2">
        <p id="statTotalGuesses">Total guesses: 0</p>
        <p id="statTotalHits">Total hits: 0</p>
        <p id="statTotalAccuracy">Total accuracy: 0.00</p>
      </div>

      <div id="statBlock3">
        <p id="statTotalGames">Total games: 0</p>
        <p id="statTotalVictories">Total victories: 0</p>
        <p id="statWinPercentage">Win percentage: 0.00</p>
      </div> */}
    </section>
  );
}

let mapStateToProps = (state) => {
  return {
    boardReducer: state.boardReducer,
  };
};

export default connect(mapStateToProps, null)(Stats);
