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

import styles from "../styles/List.module.css";

const Home = () => {
  const [coords, setCoords] = useState({
    latitude: 55.6711872,
    longitude: 12.4533982,
  });
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
            data-key={stand.uid}
            onClick={() => setShowDialog(true)}
          >
            <div className={styles.list_item__title}>
              <span>{stand.name}</span>
            </div>
            <div className={styles.list_item__content}>
              <span>{stand.distance}</span>
              <span>{stand.address}</span>
            </div>
          </div>
        ))}
      </div>
      <Button getCoords={getCoords} />
      <Dialog show={showDialog} onHide={() => setShowDialog(false)} />
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
