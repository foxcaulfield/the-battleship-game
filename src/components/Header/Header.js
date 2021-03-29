import styles from "./Header.module.css";
import Info from "./Info/Info";

function Header() {
  return (
    <>
      <div className={styles.mainHeader}>
        <Info />
        <span className={styles.headerText}>The Battleship Game v.0.5.0</span>
        {/* <button>stat</button> */}
      </div>
    </>
  );
}

export default Header;
