"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { register } from "swiper/element";

const ProductPhotos = ({ items }) => {
  register();

  return (
    <div className="container-horisontal product-photos">
      <swiper-container
        class="container-horisontal slider product-photos__slider"
        loop="true"
        slides-per-view={1}
        thumbs-swiper=".container-vertical.product-photos__list"
      >
        {items.map((item, index) => (
            <swiper-slide key={index}>
              <div className="container-horisontal slider__photo">
                <Image
                  src={item.conversions.preview.url}
                  key={index}
                  alt={"Image" + index}
                  width={471}
                  height={471}
                />
              </div>
            </swiper-slide>
          ))}
      </swiper-container>
      <swiper-container
        class="container-vertical product-photos__list"
        direction="vertical"
        loop="true"
        slides-per-view={5}
        watch-slides-progress={true}
      >
        {items.map((item, index) => (
            <swiper-slide key={index}>
              <div className="container-horisontal list__photo">
                <Image
                  src={item.conversions.thumb.url}
                  key={index}
                  alt={"Image" + index}
                  width={83}
                  height={83}
                />
              </div>
            </swiper-slide>
          ))}
      </swiper-container>
    </div>
  );
};

export default ProductPhotos;
