import Head from "next/head";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { siteName, categoriesDesc } from "../../public/texts";

import client from "../../graphQL/client";
import allCategories from "../../graphQL/queries/allCategories";

export default function categories({ data }) {
  // console.log(data);
  return (
    <>
      <Head>
        <title>{`${siteName} | CATEGORIES`}</title>
        <meta name="description" content={categoriesDesc} />
      </Head>
      <div id="categories" className="MAIN-PAGE">
        {data.map((entry, index) => {
          var data = entry.attributes;
          var link = data.urlName;
          var heading = data.title;
          var imgSrc = data.picture.data.attributes.url;
          var desc = data.description;
          return (
            <Link href={`/categories/${link}`} key={index}>
              <a className="main-category-card">
                <h2>{heading}</h2>
                <div className="img-container">
                  <Image src={imgSrc} layout="fill" objectFit="cover" />
                </div>
                <p>{desc}</p>
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: allCategories,
  });

  return {
    props: {
      data: data.categories.data,
    },
  };
}
