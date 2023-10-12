import PopularProducts from "@/components/base/PopularProducts";
import {
  catalogItemGET,
  getRunningQueriesThunk,
  useCatalogItemGETQuery,
} from "@api/catalogApi";
/* import PopularProducts from "@components/Home/PopularProducts"; */
import ProductContent from "@components/Product/ProductContent/ProductContent";
import ProductOptions from "@components/Product/ProductOptions";
/* import Breadcrumbs from "@components/base/Breadcrumbs"; */
import Preloader from "@components/base/Preloader";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { wrapper } from "@/redux/store";
import { skipToken } from "@reduxjs/toolkit/query";
import dynamic from "next/dynamic";

const ProductPhotos = dynamic(() => import('@components/Product/ProductPhotos'), {
  ssr: false,
})
const RatingStars = dynamic(() => import('@components/base/RatingStars'), {
  ssr: false,
})

export default function ProductPage() {
  const router = useRouter();
  const { productSlug } = router.query;

  const { data, isLoading, error } = useCatalogItemGETQuery(
    typeof productSlug === "string" ? productSlug : skipToken,
    {
      skip: router.isFallback,
    }
  );
  console.log(data);

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : router.isFallback || isLoading ? (
        <Preloader />
      ) : data ? (
        <>
          {data?.seo && (
            <Head>
              <title>{data.seo.title}</title>
              {Object.keys(data.seo).map((item, index) => (
                <meta property={item} content={data.seo[item]} key={item} />
              ))}
            </Head>
          )}
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
                      <RatingStars
                        value={parseFloat(data.data.product.rating)}
                      />
                    </div>
                    <span className="text rate__text">
                      {data.data.product.rating}
                    </span>
                  </div>
                </div>
                {data.data.images&&<ProductPhotos items={data.data.images} />}
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
      ) : null}
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const productSlug = context.params?.productSlug;
    if (productSlug) {
      store.dispatch(catalogItemGET.initiate(productSlug));
    }

    await Promise.all(store.dispatch(getRunningQueriesThunk()));
    return {
      props: {},
    };
  }
);
