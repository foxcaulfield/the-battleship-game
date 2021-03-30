import styles from "./Introduction.module.css";

function Introduction() {
  return (
    <p className={styles.introductionParagraph}>
      Hello! This is a Battleship! Objective of the game is to destroy the enemy
      ship
    </p>
  );
}

export default Introduction;
