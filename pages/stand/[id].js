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
        <div className={styles.header_icon}>
          <span onClick={() => router.push("/")}>
            <i className="icon arrow"></i>
          </span>
        </div>
        <div className={styles.header_title}>
          <h1>Pølsebaren</h1>
        </div>
      </header>
      <main>
        <div className={styles.row}>
          <div className={styles.column}>
            <i className="icon place"></i>
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
