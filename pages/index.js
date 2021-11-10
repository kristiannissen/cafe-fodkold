/**
 * @file index.js
 *
 */
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect, useRef, useDebugValue } from "react";
import Dialog from "./components/dialog";
import Toast from "./components/toast";
import Button from "./components/button";
import { StandContext, StandState } from "../context/stand";

import styles from "../styles/List.module.css";

const Home = () => {
  const [coords, setCoords] = useState({
    latitude: 55.670249,
    longitude: 10.3333283,
  });
  const [stand, setStand] = useState(StandState);
  const [stands, setStands] = useState([]);
  const workerRef = useRef();
  const [showDialog, setShowDialog] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const getCoords = (coords) => {
    // Update coords on click
    setCoords({
      longitude: coords.longitude,
      latitude: coords.latitude,
    });
  };

  const getStand = (e) => {
    // Iterate over the array of stands and find the matching key
    let s = stands.filter((item) => item.uid === e.currentTarget.dataset.uid);
    setStand(s.shift());
    setShowDialog(true);
  };

  useEffect(() => {
    // Create a new worker ref
    workerRef.current = new Worker(new URL("../worker.js", import.meta.url));
    // Post coords to worker
    workerRef.current.postMessage({ coords });
    // Wait for worker to respond
    workerRef.current.onmessage = (event) => {
      // Update state
      setStands(event.data.stands);
    };
    return () => {
      workerRef.current.terminate();
    };
  }, [coords]);

  return (
    <>
      <Head>
        <title>Cafe Fodkold</title>
      </Head>
      <div className={styles.list}>
        {stands.map((stand) => (
          <div
            className={styles.list_item}
            key={stand.uid}
            data-uid={stand.uid}
            onClick={getStand}
          >
            <div className={styles.list_item__title}>
              <span>{stand.name}</span>
            </div>
            <div className={styles.list_item__content}>
              <span>{stand.distance} km</span>
              <span>{stand.address}</span>
            </div>
          </div>
        ))}
      </div>
      <Button getCoords={getCoords} />
      <StandContext.Provider value={stand}>
        <Dialog show={showDialog} onHide={() => setShowDialog(false)} />
      </StandContext.Provider>
      <Toast
        message={toastMessage}
        show={showToast}
        onHide={() => setShowToast(false)}
      />
    </>
  );
};

/**
 * Deprecated
export const getStaticProps = async (context) => {
  const req = await fetch(`${process.env.HOST}/api/sausage-stands`);
  const res = await req.json();

  return {
    props: {
      stands: res.stands,
    },
  };
};
*/

export default Home;
