import { setShipPositionActionCreator } from "../../../../store/reducers/boardReducer";
import { connect } from "react-redux";
import styles from "./StartButton.module.css";

function StartButton(props) {
  return (
    <button
      id="startButton"
      onClick={props.setShipPosition}
      className={`${styles.metal} ${styles.linear} ${styles.startButton}`}
    >
      Start
    </button>
  );
}

let mapDispatchToProps = (dispatch) => {
  return {
    setShipPosition: (guess) => {
      dispatch(setShipPositionActionCreator(guess));
    },
  };
};

export default connect(null, mapDispatchToProps)(StartButton);