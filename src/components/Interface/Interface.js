import ControlButtons from "./ControlButtons/ControlButtons";
import Stats from "./Stats/Stats";
import Board from "./Board/Board";
import styles from "./Interface.module.css";

function Interface() {
  return (
    <div>
      <div className={styles.controlPanel}>
        <div className={styles.controlPanelUnitButtons}>
          <ControlButtons />
        </div>
        <div className={styles.controlPanelUnitStats}>
          <Stats />
        </div>
      </div>
      <Board />
    </div>
  );
}

export default Interface;
