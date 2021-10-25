/**
 *
 *
 */
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Stand.module.css";

const Stand = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Pølsebaren</title>
      </Head>
      <header className={styles.header}>
        <span onClick={() => router.push("/")}>
            <i className="icon arrow"></i>
        </span>
        <h1>Pølsebaren</h1>
      </header>
      <main>
        <div className={styles.row}>
          <div className={styles.column}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>
          <div className={styles.column}>Gladsaxe Møllevej 27, 2860 Søborg</div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>icon</div>
          <div className={styles.column}>Text</div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>icon</div>
          <div className={styles.column}>Text</div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>icon</div>
          <div className={styles.column}>Text</div>
        </div>
      </main>
    </>
  );
};

export default Stand;
