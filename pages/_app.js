import Head from "next/head";

import "../styles/styles.css";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer";

import { ApolloProvider } from "@apollo/client/react";
import client from "../graphQL/client";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ApolloProvider client={client}>
        <Head>
          <link rel="icon" type="image/png" href="/ig.png" />
          <meta name="color-scheme" content="dark" key={"color-scheme"} />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
