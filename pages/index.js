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
import { PositionContext, PositionState } from "../context/position";

import styles from "../styles/List.module.css";

const Home = () => {
  const [position, setPosition] = useState(PositionState);
  const [stand, setStand] = useState(StandState);
  const [stands, setStands] = useState([]);
  const workerRef = useRef();
  const [showDialog, setShowDialog] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const getPosition = (position) => {
    // Update coords on click
    setPosition({
      longitude: position.coords.longitude,
      latitude: position.coords.latitude,
    });
  };

  const getStand = (e) => {
    // Iterate over the array of stands and find the matching key
    let s = stands.filter((item) => item.uid === e.currentTarget.dataset.uid);
    setStand(s.shift());
    setShowDialog(true);
  };
  // TODO: Move to components/toast.js as a function
  const popToast = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
  };

  useEffect(() => {
    popToast("Loading...");
    // Create a new worker ref
    workerRef.current = new Worker(new URL("../worker.js", import.meta.url));
    // Post coords to worker
    workerRef.current.postMessage({ position });
    // Wait for worker to respond
    workerRef.current.onmessage = (event) => {
      // Update state
      setStands(event.data.stands);
    };
    return () => {
      workerRef.current.terminate();
    };
  }, [position]);

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
      <Button clickHandler={getPosition} />
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
