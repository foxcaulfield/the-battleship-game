import styles from "./InfoButton.module.css";

function InfoButton(props) {
  return (
    <button
      className={`${styles.metal} ${styles.linear} ${styles.infoButton} `}
      onClick={props.handleClose}
    >
      Rules
    </button>
  );
}

export default InfoButton;
