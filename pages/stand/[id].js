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
      <header className={styles.container}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
          className={styles.svg}
          onClick={() => router.push("/")}
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
        </svg>
        <h1>Pølsebaren</h1>
      </header>
      <main>hello</main>
    </>
  );
};

export default Stand;
