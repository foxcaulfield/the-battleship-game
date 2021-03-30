import styles from "./Popup.module.css";
import React from "react";

const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        {props.content}
        <button className={styles.metalButton} onClick={props.handleClose}>
          ok
        </button>
      </div>
    </div>
  );
};

export default Popup;
