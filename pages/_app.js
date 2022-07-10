import Head from "next/head";

import "../styles/globals.css";
import "../styles/headerAndFooter.css";
import "../styles/home.css";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/ig.png" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
