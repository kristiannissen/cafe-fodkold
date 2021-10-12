import Head from "next/head";

export async function getStaticProps(context) {
  const res = await fetch(`${process.env.HOST}/api/sausage-stands`);
  const data = await res.json();

  return {
    props: {
      stands: data.stands,
    },
  };
}

export default function Home({ stands }) {
  return (
    <div>
      <Head>
        <title>Cafe Fodkold</title>
      </Head>
      <main>
        <ul>
          {stands.map((stand) => (
            <li key={stand.uid}>{stand.name}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}
