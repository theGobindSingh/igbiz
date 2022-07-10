import Head from "next/head";

import { siteName, siteDesc } from "../public/texts";

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteName}</title>
        <meta name="description" content={siteDesc} />
      </Head>
      <div id="main"></div>
    </>
  );
}
