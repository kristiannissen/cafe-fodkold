/**
 * @file index.js
 *
 */
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Dialog from "./components/dialog";
import Toast from "./components/toast";
import Button from "./components/button";

import styles from "../styles/List.module.css";

const Home = () => {
  const [coords, setCoords] = useState({
    latitude: "55.6711872",
    longitude: "12.4533982",
  });
  const [stands, setStands] = useState([]);
  const workerRef = useRef();
  const [showDialog, setShowDialog] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const doFetch = () => {
    popToast("Loading data...");

    fetch("/api/sausage-stands")
      .then((res) => res.json())
      .then((arr) =>
        workerRef.current.postMessage({ stands: arr.stands, coords })
      );
  };
  // Util function
  const popToast = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
  };
  const getCoords = (coords) => {
    setCoords({
      longitude: coords.longitude,
      latitude: coords.latitude,
    });
  };
  // TODO: Add worker to find single stand
  useEffect(() => {
    doFetch();
    // Push stands to worker for sorting
    workerRef.current = new Worker(new URL("../worker.js", import.meta.url));
    workerRef.current.onmessage = (event) => setStands(event.data);
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
              <i className="icon place"></i>
              <span>{stand.name}</span>
            </div>
            <div className={styles.list_item__content}>
              <i className="icon directions_walk"></i>
              <span>{stand.distance} km</span>
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
