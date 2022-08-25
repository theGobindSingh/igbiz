import { useEffect, useState } from "react";
import Head from "next/head";

import { siteName, siteDesc, homeDesc, homeHead } from "../public/texts";

import SwiperSlick from "../components/SwiperSlick";

import { useQuery } from "@apollo/client/react";
import allCategoriesQuery from "../graphQL/queries/allCategories";
import latestProductQuery from "../graphQL/queries/topBusinesses";

export default function Home() {
  const {
    data: categoriesData,
    loading: categoriesLoading,
    error: categoriesError,
  } = useQuery(allCategoriesQuery);
  const {
    data: latestProductDataTemp,
    loading: latestProductLoading,
    error: latestProductError,
  } = useQuery(latestProductQuery(1, 10));
  const [latestProductData, setLatestProductData] = useState([]);
  // const {
  //   data: creatorsData,
  //   loading: creatorsLoading,
  //   error: creatorsError,
  // } = useQuery(latestProductQuery(1, 10));

  useEffect(() => {
    let data = [];
    latestProductDataTemp?.businesses.data.forEach((item) => {
      // console.log(item.attributes);
      var tempArr = [];
      for (let i = 1; i <= 5; i++) {
        let bizName = item.attributes.name;
        let product = item.attributes.bestProducts[`product${i}`];
        tempArr.push({ product: product, bizName: bizName });
      }
      let bestCurrentProduct = tempArr[item.attributes.latestProduct];
      data.push(bestCurrentProduct);

      // console.log(latestProductData);
    });
    setLatestProductData(data);
  }, [latestProductDataTemp]);

  if (
    categoriesLoading ||
    categoriesError ||
    latestProductLoading ||
    latestProductError
  ) {
    return <div>wait</div>;
  }

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
          <SwiperSlick
            heading={"Categories"}
            link="/categories"
            data={categoriesData?.categories?.data || []}
          />
          <SwiperSlick
            heading={"New Items"}
            link="/"
            data={latestProductData || []}
          />
          <SwiperSlick
            heading={"Businesses"}
            link="/"
            data={latestProductDataTemp?.businesses?.data || []}
          />
        </div>
      </div>
    </>
  );
}
