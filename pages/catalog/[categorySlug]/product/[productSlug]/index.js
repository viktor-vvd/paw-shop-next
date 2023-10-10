import PopularProducts from "@/components/base/PopularProducts";
import { useLazyCatalogItemGETQuery } from "@api/catalogApi";
/* import PopularProducts from "@components/Home/PopularProducts"; */
import ProductContent from "@components/Product/ProductContent/ProductContent";
import ProductOptions from "@components/Product/ProductOptions";
import ProductPhotos from "@components/Product/ProductPhotos";
/* import Breadcrumbs from "@components/base/Breadcrumbs"; */
import Preloader from "@components/base/Preloader";
import RatingStars from "@components/base/RatingStars";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const ProductPage = () => {
  const router = useRouter();
  const { productSlug } = router.query;

  const [catalogItemGET, { data, isFetching }] = useLazyCatalogItemGETQuery();
console.log(data);
  useEffect(() => {
    productSlug!=undefined&&catalogItemGET(productSlug);
  }, [productSlug]);

  return (
    <>
      {isFetching && <Preloader />}
      {data?.data && (
        <>
        <Head>
          <title>{data.seo.title}</title>
          {Object.keys(data.seo).map((item, index) => (
              <meta property={item} content={data.seo[item]} key={item} />
            ))}
        </Head>
        <div className="container-vertical page-container product">
          <section className="container-vertical outer-container product__wrapper">
            <div className="container-vertical container product__breadcrumbs">
              {/* <Breadcrumbs item={{ name: data.data.name }} /> */}
            </div>
            <div className="container product__top">
              <div className="product__header">
                <h2 className="title product__title">{data.data.name}</h2>
                <span className="text product__code">
                  <span className="product__code_SKU">SKU:</span>{" "}
                  {data.data.sku}
                </span>
                <div className="container-horisontal rate">
                  <div className="container-horisontal rate__stars">
                    <RatingStars value={parseFloat(data.data.product.rating)} />
                  </div>
                  <span className="text rate__text">
                    {data.data.product.rating}
                  </span>
                </div>
              </div>
              <ProductPhotos items={data.data.images} />
              <ProductOptions item={data} />
              {/* {switchingData&&<ProductOptions item={switchingData} />} */}
            </div>
          </section>
          <section className="container-vertical product__middle">
            <ProductContent item={data} />
          </section>
          <PopularProducts
            title="You can like this"
            buttons={false}
            className="product__recommendations"
          />
        </div>
        </>
      )}
    </>
  );
};

export default ProductPage;
