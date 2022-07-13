import Head from "next/head";

import { siteName, siteDesc, homeDesc, homeHead } from "../public/texts";

import SwiperSlick from "../components/SwiperSlick";

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteName}</title>
        <meta name="description" content={siteDesc} />
      </Head>
      <div id="home" className="MAIN-PAGE">
        <main id="home-main">
          <h1>{homeHead}</h1>
          <p>{homeDesc}</p>
        </main>
        <div className="all-swipers">
          <SwiperSlick heading={"Categories"} link="/categories" />
          <SwiperSlick heading={"New Items"} link="/" />
          <SwiperSlick heading={"Creators"} link="/creators" />
        </div>
      </div>
    </>
  );
}
