import Head from "next/head";

import "../styles/globals.css";
import "../styles/HeaderAndFooter.css";

import Header from "../components/Header.jsx";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/ig.png" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
