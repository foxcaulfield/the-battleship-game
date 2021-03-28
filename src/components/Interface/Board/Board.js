import React from "react";
import { connect } from "react-redux";
import FieldSquare from "./FieldSquare/FieldSquare";
import {
  getGuessActionCreator,
  setWinGameOverFlow,
} from "../../../store/reducers/boardReducer";

function Board(props) {
  let fieldArray = [],
    i = 0,
    len = props.boardReducer.fieldLength;
  while (++i <= len) fieldArray.push(i);

  return (
    <section id="field" class="hide">
      {props.boardReducer.isWin ? "win" : "not win"}
      <br />
      {props.boardReducer.isGameOver ? "game over" : "not gameover"}
      <br />
      ship position is
      {props.boardReducer.shipPosition}
      <br />
      Attempts left
      {props.boardReducer.attemptsLeft}
      <br />
      {fieldArray.map(function (i) {
        return (
          <FieldSquare
            disabled={
              props.boardReducer.isWin ||
              props.boardReducer.isGameOver ||
              !props.boardReducer.shipPosition
            }
            key={i}
            index={i}
            buttonId={`buttonId${i}`}
            buttonValue={i}
            getGuess={props.getGuess}
          />
        );
      })}
    </section>
  );
}

let mapStateToProps = (state) => {
  return {
    boardReducer: state.boardReducer,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    getGuess: (guess) => {
      dispatch(getGuessActionCreator(guess));
      dispatch(setWinGameOverFlow());

      // dispatch(getGuessActionCreator(guess));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
