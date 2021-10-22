/**
 *
 */
import styles from "../../styles/Toolbar.module.css";

const Toolbar = () => {

  const getUserLocation = () => {
    if (navigator.getlocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          alert(pos)
        },
        () => alert("Go find yourself")
      );
    } else {
      alert("Not supported in your browser");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <span className={styles.label}>Explore</span>
      </div>
      <div className={styles.button} onClick={getUserLocation}>
        <span className={styles.label}>Location</span>
      </div>
    </div>
  );
};

export default Toolbar;
