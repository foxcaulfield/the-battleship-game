import styles from "./Header.module.css";
import InfoButton from "./InfoButton/InfoButton";

function Header(props) {
  return (
    <>
      <div className={styles.mainHeader}>
        <InfoButton handleClose={props.handleClose} />
        <span className={styles.headerText}>The Battleship Game v.0.6.2</span>
        {/* <button>stat</button> */}
      </div>
    </>
  );
}

export default Header;
