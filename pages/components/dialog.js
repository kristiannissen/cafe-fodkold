/**
 *
 * @file pages/components/dialog.js
 */
import ReactDOM from "react-dom";
import {useState, useEffect} from "react";

import styles from "../../styles/Dialog.module.css";

const Dialog = (props) => {
    const [isBrowser, setIsBrowser] = useState(false)

    useEffect(() => {
        setIsBrowser(true)
    }, [])

    const content = props.show ? (
            <div className={styles.dialog}>
              <div className={styles.dialog__container}>
                <div className={styles.dialog__container__title}>
                  <span>Dialog Title</span>
                  <span>
                    <button onClick={() => props.onHide()}>Close</button>
                  </span>
              </div>
                <div className={styles.dialog__container__content}>
                  <div className={styles.table}>
                    <div className={styles.table__row}>
                      <div className={styles.table_cell}>Cell</div>
                      <div className={styles.table_cell}>Cell</div>
                    </div>
                    <div className={styles.table__row}>
                      <div className={styles.table_cell}>Cell</div>
                      <div className={styles.table_cell}>Cell</div>
                    </div>
                    <div className={styles.table__row}>
                      <div className={styles.table_cell}>Cell</div>
                      <div className={styles.table_cell}>Cell</div>
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
        )
    } else {
        return null
    }
};

export default Dialog;
