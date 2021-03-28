function Stats() {
  return (
    <section id="stats" class="hide">
      <div id="statBlock1">
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
      </div>
    </section>
  );
}

export default Stats;
