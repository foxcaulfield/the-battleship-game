import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import FieldSquare from "./FieldSquare/FieldSquare";
import {
  getGuessActionCreator,
  toggleWinGameOverFlow,
} from "../../../store/reducers/boardReducer";
import styles from "./Board.module.css";
import Popup from "../../../utils/Popup";

function Board(props) {
  let fieldArray = [],
    i = 0,
    len = props.boardReducer.fieldLength;
  while (++i <= len) fieldArray.push(i);

  //pop-up interface
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (props.boardReducer.isGameOver) {
      setIsOpen(true);
    }
  }, [props.boardReducer.isGameOver]);
  //pop-up interface

  return (
    <section id="field" className={styles.fieldBoard}>
      {isOpen ? (
        <Popup
          content={
            props.boardReducer.isWin ? (
              <h1>
                CONGRATULATIONS! YOU WON!{" "}
                <span className="emoji" role="img" aria-label="cool">
                  😎
                </span>
              </h1>
            ) : (
              <h1>
                OOPS, FAILED{" "}
                <span className="emoji" role="img" aria-label="Slightly Sad">
                  🙁
                </span>
              </h1>
            )
          }
          handleClose={togglePopup}
        />
      ) : undefined}

      {fieldArray.map(function (i) {
        let value = i;
        return (
          <FieldSquare
            disabled={
              props.boardReducer.isWin ||
              props.boardReducer.isGameOver ||
              !props.boardReducer.shipPosition ||
              props.boardReducer.guessesArray.some((elem) => elem === i)
            }
            key={i}
            index={i}
            buttonId={`buttonId${i}`}
            buttonValue={value}
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
      dispatch(toggleWinGameOverFlow());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
