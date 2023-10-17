import React, { useEffect, useState } from "react";
import ProductNavigation from "./ProductNavigation";
import ProductDescription from "./ProductTabs/ProductDescription";
import ProductReviews from "./ProductTabs/ProductReviews";
import AddReview from "./ProductTabs/AddReview";

const ProductContent = ({ item, commentsData, handlePagination }) => {
  const [tab, setTab] = useState(item?.data.product.body ? 1 : 2);
  useEffect(() => {
    setTab(item?.data.product.body ? 1 : 2);
  }, [item]);
  return (
    <>
      <ProductNavigation
        reviews={item.data.product.comments_count}
        isDescrtiption={item?.data.product.body ? true : false}
        tab={tab}
        setTab={setTab}
      />
      <div className="container-horisontal outer-container product__content__container">
        <div className="container-vertical container product__content">
          {item?.data.product.body && tab == 1 && <ProductDescription item={item} />}
          {tab == 2 && <ProductReviews item={item} data={commentsData} handlePagination={handlePagination} />}
          {tab == 3 && <AddReview item={item} />}
        </div>
      </div>
    </>
  );
};

export default ProductContent;
