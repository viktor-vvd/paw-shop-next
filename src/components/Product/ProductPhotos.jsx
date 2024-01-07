import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { register } from "swiper/element";

const ProductPhotos = ({ items }) => {
  const photosSlider = useRef(null);
  const [sliderIndex, setSliderIndex] = useState(0);
  register();

  const handleonClick=(index)=>{
    const photosSliderContainer = photosSlider.current;
    photosSliderContainer.swiper.slideTo(index);
  }

  useEffect(() => {
    const photosSliderContainer = photosSlider.current;

    const paramsSlider = {
      loop: false,
      slidesPerView: 1,
    };
    if (items) {
      Object.assign(photosSliderContainer, paramsSlider);
      photosSliderContainer.initialize();
      handleonClick(0);
    }
    photosSliderContainer.swiper.on("slideChange", () => {
      setSliderIndex(photosSliderContainer.swiper.activeIndex);
    });
  }, [items]);

  return (
    <>
      {items && (
        <div className="container-horizontal product-photos">
          {/* Mauricio I can't move it move it anymore */}
          <swiper-container
            class="container-horizontal slider product-photos__slider productPhotoSlider"
            ref={photosSlider}
            init="false"
          >
            {items.map((item, index) => (
              <swiper-slide key={index}>
                <div className="container-horizontal slider__photo">
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
          <div
            className="container-vertical product-photos__list productPhotoList"
          >
            {items.map((item, index) => (
              <div
                className={
                  sliderIndex == index
                    ? "container-horizontal list__photo list__photo_active"
                    : "container-horizontal list__photo"
                }
                onClick={()=>handleonClick(index)}
                key={index}
              >
                <Image
                  src={item.conversions.thumb.url}
                  key={index}
                  alt={"Image" + index}
                  width={83}
                  height={83}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPhotos;
