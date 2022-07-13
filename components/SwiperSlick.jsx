import React from "react";
import Link from "next/link";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function SwiperSlick({ heading, link }) {
  return (
    <div>
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
        // className="slick-slider" --- already given builtin
      >
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}
