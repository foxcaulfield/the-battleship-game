import styles from "./FieldSquare.module.css";
import classNames from "classnames";

function FieldSquare(props) {
  return (
    <button
      className={classNames(
        styles.metal,
        styles.linear,
        styles.fieldSquare,
        {
          [styles.dim]: props.dim,
        },
        { [styles.isGameInProgress]: !props.isGameOver }
      )}
      disabled={props.disabled}
      id={props.buttonId}
      onClick={(e) => props.getGuess(e.target.innerHTML)}
    >
      {props.buttonValue}
    </button>
  );
}

export default FieldSquare;
