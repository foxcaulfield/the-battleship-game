import styles from "./ThemeButton.module.css";

function ThemeButton(props) {
  return (
    <button
      className={`${styles.metal} ${styles.linear} ${styles.themeButton} `}
      onClick={() => alert("TIME TO CHANGE")}
    >
      THEME
    </button>
  );
}

export default ThemeButton;
