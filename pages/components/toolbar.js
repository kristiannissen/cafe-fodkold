/**
 *
 */
import {useState} from "react";
import styles from "../../styles/Toolbar.module.css";

const Toolbar = () => {
    const initUser = {lat: "", lng: ""}
    const [user, setLocation] = useState(initUser)

  const getUserLocation = () => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((p) => {
            user.lat = p.coords.latitude;
            user.lng = p.coords.longitude;
            setLocation(user)
        })
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
