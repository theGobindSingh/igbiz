import React from "react";
import Link from "next/link";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { siteName } from "../public/texts";

export default function SwiperSlick({ heading, link, data }) {
  // console.log("---", data);
  return (
    <div className="single-swiper-card">
      <h2>
        <Link href={link}>{heading}</Link>
      </h2>
      <Slider
        dots={false}
        arrows={false}
        autoplay={true}
        autoplaySpeed={1500}
        slidesToScroll={1}
        slidesToShow={1}
        infinite={true}
        lazyLoad="anticipated"
        // adaptiveHeight={true}
        // className="slick-slider" --- already given builtin
      >
        {heading.toLowerCase() == "categories" &&
          data.map((cat, ind) => {
            let catAttr = cat?.attributes || null;
            let pictureURL = catAttr?.picture?.data?.attributes?.url;
            let title = catAttr?.title || "Category";
            let url = catAttr?.urlName || "/";
            let desc = catAttr?.description || siteName;
            return (
              <Link href={`/categories/${url || null}`} key={ind}>
                <a className="category-box home-box">
                  <div className="img-container">
                    <Image
                      src={pictureURL}
                      alt={desc}
                      layout={"fill"}
                      objectFit={"cover"}
                    />
                  </div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </a>
              </Link>
            );
          })}
        {heading.toLowerCase() == "new items" &&
          data.map((item, ind) => {
            let pictureURL =
              item?.product?.productPicture?.data?.attributes?.url || "";
            let title = item?.product?.productName || "Product";
            let url = item?.bizName || "";
            let desc =
              item?.product?.productDescription || "Product Description";
            return (
              <Link href={`/businesses/${url}`} key={ind}>
                <a className="category-box home-box">
                  <div className="img-container">
                    <Image
                      src={pictureURL}
                      alt={desc}
                      layout={"fill"}
                      objectFit={"cover"}
                      priority={ind == 0 || ind == 1 || ind == 2}
                    />
                  </div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </a>
              </Link>
            );
          })}
        {heading.toLowerCase() == "businesses" &&
          data.map((bizItem, ind) => {
            let biz = bizItem?.attributes;
            let bizOwners = biz.owners.data; //this is array
            let bizOwnersNew = [];
            let pictureURL = biz.profilePicture.data.attributes.url;
            let title = biz.name || "Business";
            let url = biz.name || null;
            let desc = biz.description || siteName;
            bizOwners.forEach((owner) => {
              let ownerName = owner.attributes.name;
              bizOwnersNew.push(ownerName.split(" ")[0]);
            });
            let ownersString = "By " + bizOwnersNew.join(" & ");
            return (
              <Link href={`/businesses/${url}`} key={ind}>
                <a className="category-box home-box">
                  <div className="img-container">
                    <Image
                      src={pictureURL}
                      alt={desc}
                      layout={"fill"}
                      objectFit={"cover"}
                      priority={ind == 0 || ind == 1 || ind == 2}
                    />
                  </div>
                  <h3>{title}</h3>
                  <p>{ownersString}</p>
                </a>
              </Link>
            );
          })}
      </Slider>
    </div>
  );
}
