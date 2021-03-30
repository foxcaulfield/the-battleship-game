import styles from "./Header.module.css";
import InfoButton from "./InfoButton/InfoButton";
import Popup from "../../utils/Popup/Popup";
import React, { useState } from "react";
import Tutorial from "../Introduction/Tutorial/Tutorial";
import ThemeButton from "./ThemeButton/ThemeButton";

function Header(props) {
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
        <span className={styles.headerText}>The Battleship Game v.0.7.1</span>
        <ThemeButton changeTheme={props.toggleTheme} />
      </div>
    </>
  );
}

export default Header;
