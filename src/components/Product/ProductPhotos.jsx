import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { register } from "swiper/element";

const ProductPhotos = ({ items }) => {
  const photosSlider = useRef(null);
  const photosList = useRef(null);
  register();
    useEffect(() => {
    const photosSliderContainer = photosSlider.current;
    const photosListContainer = photosList.current;

    const paramsSlider = {
      loop: true,
      slidesPerView: 1,
      thumbs: {
        swiper: photosList
      }
    };
    const paramsList = {
      direction: "vertical",
      loop: true,
      slidesPerView: 5,
      freeMode: true,
      watchSlidesProgress: true,
    };
    if (items) {
      Object.assign(photosListContainer, paramsList);
      photosListContainer.initialize();
      Object.assign(photosSliderContainer, paramsSlider);
      photosSliderContainer.initialize();
    }
    /* photosSliderContainer.on("slideChange", () => {
      photosListContainer.slideTo(swiper.activeIndex);
    }); */
  }, [items]);

  return (
    <>
      {items && (
        <div className="container-horisontal product-photos">
          <swiper-container
            class="container-horisontal slider product-photos__slider productPhotoSlider"
            /* loop="true"
            slides-per-view={1}
            thumbs-swiper=".productPhotoList" */
            init="false"
            ref={photosSlider}
            /* thumbs-swiper={photosList.current} */
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
            class="container-vertical product-photos__list productPhotoList"
            /* direction="vertical"
            loop="true"
            slides-per-view={5}
            free-mode="true"
            watch-slides-progress="true" */
            init="true"
            ref={photosList}
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
      )}
    </>
  );
};

export default ProductPhotos;
