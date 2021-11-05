/**
 * @file pages/components/button.js
 */
import { useEffect, useState } from "react";

import styles from "../../styles/Button.module.css";

const Button = ({ getCoords }) => {
  let css = [styles.btn, styles.btn__primary].join(" ");
  return (
    <button
      className={css}
      onClick={(e) => {
        e.preventDefault();
        navigator.geolocation.getCurrentPosition((p) => getCoords(p.coords));
      }}
    >
      <i className="icon my_location"></i>
    </button>
  );
};

export default Button;
