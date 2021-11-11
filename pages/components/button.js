/**
 * @file pages/components/button.js
 */
import { useEffect, useState } from "react";
import useCurrentPosition from "../../hooks/usecurrentposition";

import styles from "../../styles/Button.module.css";

const Button = ({ clickHandler }) => {
  const [position, error] = useCurrentPosition();

  let css = [styles.btn, styles.btn__primary].join(" ");

  return (
    <button
      className={css}
      onClick={(e) => {
        // Merge position and error object
        clickHandler(Object.assign(position, error));
      }}
    >
      <i className="icon my_location"></i>
    </button>
  );
};

export default Button;
