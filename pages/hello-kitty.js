import Header from "./components/header";
import Head from "next/head";

export default function HelloKitty({ user }) {
  return (
    <div>
      <Head>
        <title>Hello</title>
      </Head>
      <Header title="Hello Kitty" />
    </div>
  );
}
