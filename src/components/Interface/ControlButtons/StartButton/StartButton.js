import { setShipPositionActionCreator } from "../../../../store/reducers/boardReducer";
import { connect } from "react-redux";

function StartButton(props) {
  return (
    <button id="startButton" onClick={props.setShipPosition}>
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
