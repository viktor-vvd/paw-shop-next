import { useLazyCommentsProductListGETQuery } from "@api/commentsApi";
import Pagination from "@components/Catalog/Pagination";
import Preloader from "@components/base/Preloader";
import ReviewCard from "@components/base/ReviewCard";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const RatingStars = dynamic(() => import("@components/base/RatingStars"), {
  ssr: false,
});

const ProductReviews = ({ item, data, handlePagination }) => {
  /* const [commentsProductGET, { data, isFetching }] =
    useLazyCommentsProductListGETQuery(); */


  /* useEffect(() => {
    commentsProductGET({
      id: item?.data.product.id,
      data: { page: currentPage, per_page: itemsPerPage },
    });
  }, [currentPage, item]); */

  return (
    <>
      {/* {isFetching && <Preloader className="preloader_absolute" />} */}
      {data?.data && (
          <div className="container-vertical product__reviews">
            <div className="container-horizontal product__reviews__rate">
              <div className="container-horizontal rate__stars">
                <RatingStars value={parseFloat(data.total.avg)} size="40" />
              </div>
              <span className="text rate__text">
                {item.data.product.rating}
              </span>
            </div>
            <div className="container-vertical product__reviews__list">
              {data.data.map((item, index) => (
                <ReviewCard item={item} key={index} link={false} />
              ))}
            </div>
            {data.meta.last_page > 1 && (
              <Pagination
                pageCount={data.meta.last_page}
                forcePage={data.meta.current_page}
                onPageChange={handlePagination}
              />
            )}
          </div>
      )}
    </>
  );
};

export default ProductReviews;
