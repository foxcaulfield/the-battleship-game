import { setShipPositionActionCreator } from "../../../../store/reducers/boardReducer";
import { connect } from "react-redux";
import styles from "./StartButton.module.css";
import classNames from "classnames";

function StartButton(props) {
  return (
    <button
      id="startButton"
      onClick={props.setShipPosition}
      className={classNames(styles.metal, styles.linear, styles.startButton, {
        [styles.isGameOver]:
          props.boardReducer.isGameOver || !props.boardReducer.shipPosition,
      })}
    >
      Start
    </button>
  );
}

let mapStateToProps = (state) => {
  return {
    boardReducer: state.boardReducer,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setShipPosition: (guess) => {
      dispatch(setShipPositionActionCreator(guess));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartButton);
