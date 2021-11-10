/**
 *
 * @file pages/components/dialog.js
 */
import ReactDOM from "react-dom";
import { useState, useEffect, useContext } from "react";
import Image from "next/image";

import { StandContext } from "../../context/stand";
import styles from "../../styles/Dialog.module.css";

const Dialog = (props) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const stand = useContext(StandContext);
  console.log(stand);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const content = props.show ? (
    <div className={styles.dialog}>
      <div className={styles.dialog__container}>
        <div className={styles.dialog__container__title}>
          <span onClick={() => props.onHide()}>
            <i className="icon arrow"></i>
          </span>
          <span>{stand.name}</span>
        </div>
        <div className={styles.dialog__container__content}>
          <div className={styles.map}></div>
          <div className={styles.table}>
            <div className={styles.table__row}>
              <div className={styles.table__cell}>Cell</div>
              <div className={styles.table__cell}>Cell</div>
            </div>
            <div className={styles.table__row}>
              <div className={styles.table__cell}>Cell</div>
              <div className={styles.table__cell}>Cell</div>
            </div>
            <div className={styles.table__row}>
              <div className={styles.table__cell}>Cell</div>
              <div className={styles.table__cell}>Cell</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      content,
      document.getElementById("dialog-mount")
    );
  } else {
    return null;
  }
};

export default Dialog;
