/**
 * @file pages/components/toast.js
 *
 */
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
// Import component CSS
import styles from "../../styles/Toast.module.css";

const Toast = ({ show, message, onHide }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
    // FIXME: Trigger hide
    const timer = setTimeout(() => {
      onHide();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const content = show ? (
    <div className={styles.toast}>
      <div className={styles.toast__text}>{message}</div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      content,
      document.getElementById("toast-mount")
    );
  } else {
    return null;
  }
};

export default Toast;
