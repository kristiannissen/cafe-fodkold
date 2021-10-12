import Head from "next/head";
import Link from "next/link";

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
            <li key={stand.uid}><Link href="/">{stand.name}</Link></li>
          ))}
        </ul>
      </main>
    </div>
  );
}
