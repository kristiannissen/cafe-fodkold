import Head from "next/head";
import Link from "next/link";
import Toolbar from "./components/toolbar";
import styles from "../styles/List.module.css";

const Home = ({ stands }) => {
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
                <i className={styles.list_item__icon__place}></i>
                <Link href={`/stand/${stand.uid}`}>{stand.name}</Link>
              </div>
              <div className={styles.list_item__content}>Hello Pussy</div>
            </div>
          ))}
        </div>
        <Toolbar />
      </main>
    </>
  );
};

export const getStaticProps = async (context) => {
  const req = await fetch(`${process.env.HOST}/api/sausage-stands`);
  const res = await req.json();

  return {
    props: {
      stands: res.stands,
    },
  };
};

export default Home;
