import Head from "next/head";

import { siteName, siteDesc, homeDesc, homeHead } from "../public/texts";

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteName}</title>
        <meta name="description" content={siteDesc} />
      </Head>
      <main id="home">
        <h1>{homeHead}</h1>
        <p>{homeDesc}</p>
      </main>
    </>
  );
}
