import Head from "next/head";
import Link from "next/link";
import Toolbar from "./components/toolbar";

const Home = ({ stands }) => {
  return (
    <>
      <Head>
        <title>Cafe Fodkold</title>
      </Head>
      <main>
        <ul>
          {stands.map((stand) => (
            <li key={stand.uid}>
              <Link
                href={{
                  pathname: "/stand/[id]",
                  query: { id: stand.uid },
                }}
              >
                {stand.name}
              </Link>
            </li>
          ))}
        </ul>
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
