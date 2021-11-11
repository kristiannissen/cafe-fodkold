/**
 * @file pages/components/button.js
 */
import { useEffect, useState } from "react";
import useCurrentPosition from "../../hooks/usecurrentposition";

import styles from "../../styles/Button.module.css";

const Button = ({ clickHandler }) => {
  const [permission, setPermission] = useState(false);
  const [position, error] = useCurrentPosition({ permission });

  let css = [styles.btn, styles.btn__primary].join(" ");

  return (
    <button
      className={css}
      onClick={(e) => {
        setPermission(true);
        // Merge position and error object
        console.log(position, error);
      }}
    >
      <i className="icon my_location"></i>
    </button>
  );
};

export default Button;
