import styles from "./FieldSquare.module.css";

function FieldSquare(props) {
  return (
    <button
      className={`${styles.metal} ${styles.linear} ${styles.fieldSquare}`}
      disabled={props.disabled}
      id={props.buttonId}
      onClick={(e) => props.getGuess(e.target.innerHTML)}
    >
      {props.buttonValue}
    </button>
  );
}

export default FieldSquare;
