/**
 *
 */
import styles from "../../styles/Toolbar.module.css";

const Toolbar = (props) => {
  const getUserLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((p) => {
        props.setCoords({lat: p.coords.latitude, lng: p.coords.longitude});
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.button} onClick={getUserLocation}>
        <span className={styles.label}>
          <i className="icon my_location"></i>
        </span>
      </div>
    </div>
  );
};

export default Toolbar;
