import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <header>
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Header />
    </header>
  );
}
