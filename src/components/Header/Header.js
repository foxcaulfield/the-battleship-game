import styles from "./Header.module.css";
import InfoButton from "./InfoButton/InfoButton";
import Popup from "./../../utils/Popup";
import React, { useState } from "react";
import Tutorial from "../Introduction/Tutorial/Tutorial";
import ThemeButton from "./ThemeButton/ThemeButton";

function Header() {
  //pop-up interface
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  //pop-up interface
  return (
    <>
      <div>
        {isOpen && <Popup content={<Tutorial />} handleClose={togglePopup} />}
      </div>
      <div className={styles.mainHeader}>
        <InfoButton handleClose={togglePopup} />
        <span className={styles.headerText}>The Battleship Game v.0.6.8</span>
        <ThemeButton />
      </div>
    </>
  );
}

export default Header;
