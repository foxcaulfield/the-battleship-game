import React from "react";
import { connect } from "react-redux";
import FieldSquare from "./FieldSquare/FieldSquare";
import { getGuessActionCreator } from "../../../store/reducers/boardReducer";

function Board(props) {
  let fieldArray = [],
    i = 0,
    len = props.boardReducer.fieldLength;
  while (++i <= len) fieldArray.push(i);

  return (
    <section id="field" class="hide">
      {props.boardReducer.shipPosition}
      {fieldArray.map(function (i) {
        return (
          <FieldSquare
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
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
