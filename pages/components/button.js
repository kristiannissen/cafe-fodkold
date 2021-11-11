/**
 * @file pages/components/button.js
 */
import { useEffect, useState, useDebugValue } from "react";
import useCurrentPosition from "../../hooks/usecurrentposition";

import styles from "../../styles/Button.module.css";

const Button = ({ clickHandler }) => {
  const [position, error, getPosition] = useCurrentPosition();

  let css = [styles.btn, styles.btn__primary].join(" ");

  return (
    <button
      className={css}
      onClick={() => {
        getPosition().then(clickHandler);
      }}
    >
      <i className="icon my_location"></i>
    </button>
  );
};

export default Button;
