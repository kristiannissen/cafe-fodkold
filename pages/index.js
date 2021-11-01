/**
 * @file index.js
 *
 */
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Toolbar from "./components/toolbar";
import styles from "../styles/List.module.css";

const Home = () => {
  const [coords, setCoords] = useState({ lat: "55.6711872", lng: "12.4533982" });
  const [stands, setStands] = useState([]);
    const workerRef = useRef()

  const doFetch = () => {
    fetch("/api/sausage-stands")
      .then((res) => res.json())
      .then((arr) => workerRef.current.postMessage({stands: arr.stands, coords}));
  };

  useEffect(() => {
    doFetch();
      // Push stands to worker for sorting
      workerRef.current = new Worker(new URL("../worker.js", import.meta.url))
      workerRef.current.onmessage = (event) => setStands(event.data)
      return () => {
        workerRef.current.terminate()
      }

  }, [coords]);

  return (
    <>
      <Head>
        <title>Cafe Fodkold</title>
      </Head>
      <main>
        <div className={styles.list}>
          {stands.map((stand) => (
            <div className={styles.list_item} key={stand.uid}>
              <div className={styles.list_item__title}>
                <i className="icon place"></i>
                <Link href={`/stand/${stand.uid}`}>
                  <h1>{stand.name}</h1>
                </Link>
              </div>
              <div className={styles.list_item__content}>
                <i className="icon directions_walk"></i>
                <span className="body_small">5 km away</span>
              </div>
            </div>
          ))}
        </div>
        <Toolbar setCoords={setCoords} />
      </main>
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
