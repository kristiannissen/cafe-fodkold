/**
 * @file index.js
 *
 */
import Head from "next/head";
import Link from "next/link";
import Toolbar from "./components/toolbar";
import styles from "../styles/List.module.css";
import {useState, useEffect} from "react";

const Home = () => {
    const [coords, setCoords] = useState({lat: "", lng: ""});
    const [stands, setStands] = useState([]);

    const useFetch = () => {
        fetch("/api/sausage-stands")
            .then((res) => res.json())
            .then((arr) => setStands(arr.stands))
    }

    useEffect(() => {
        useFetch();
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
                <Link href={`/stand/${stand.uid}`}>{stand.name}</Link>
              </div>
              <div className={styles.list_item__content}>Hello Pussy</div>
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
