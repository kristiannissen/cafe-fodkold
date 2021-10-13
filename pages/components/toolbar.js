/**
 *
 */
import styles from "../../styles/Toolbar.module.css"

const Toolbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <span className={styles.label}>Explore</span>
      </div>
    </div>
  );
};

export default Toolbar;
