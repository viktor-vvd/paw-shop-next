import PopularProducts from "@/components/base/PopularProducts";
import {
  catalogItemGET,
  useCatalogItemGETQuery,
} from "@api/catalogApi";
import ProductContent from "@components/Product/ProductContent/ProductContent";
import ProductOptions from "@components/Product/ProductOptions";
import Breadcrumbs from "@components/base/Breadcrumbs";
import Preloader from "@components/base/Preloader";
import Head from "next/head";
import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { wrapper } from "@/redux/store";
import { skipToken } from "@reduxjs/toolkit/query";
import dynamic from "next/dynamic";
import {
  commentsProductListGET,
  getRunningQueriesThunk,
  useCommentsProductListGETQuery,
} from "@/api/commentsApi";

const ProductPhotos = dynamic(
  () => import("@components/Product/ProductPhotos"),
  {
    ssr: false,
  }
);
const RatingStars = dynamic(() => import("@components/base/RatingStars"), {
  ssr: false,
});

async function fetchProductId(slug) {
  const response = await fetch(
    `https://dropshop.demka.online/api/variation/${slug}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        sHost: "paw.shop",
        "Cache-Control": "no-cache",
      },
    }
  );
  const data = await response.json();
  return data.data.product.id;
}

export default function ProductPage() {
  const router = useRouter();
  const { productSlug } = router.query;
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error } = useCatalogItemGETQuery(
    typeof productSlug === "string" ? productSlug : skipToken,
    {
      skip: router.isFallback,
    }
  );
  const { data: commentsData } =
    useCommentsProductListGETQuery(
      typeof data?.data.product.id === "string"
        ? {
            id: data?.data.product.id,
            data: { page: currentPage, per_page: 3 },
          }
        : skipToken
      /* {
        id: typeof data?.data.product.id === "string" ? data?.data.product.id : skipToken,
        data: { page: currentPage, per_page: 3 },
      } */,
      {
        skip: router.isFallback,
      }
    );
  const handlePagination = (selectedPage) => {
    setCurrentPage(selectedPage);
  };
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const start = () => {
      setIsLoading(true);
      setCurrentPage(1);
    };
    const end = () => {
      setIsLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);


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
                <Breadcrumbs item={data.data.name} />
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
                {data.data.images && <ProductPhotos items={data.data.images} />}
                <ProductOptions item={data} />
                {/* {switchingData&&<ProductOptions item={switchingData} />} */}
              </div>
            </section>
            <section className="container-vertical product__middle">
              <ProductContent
                item={data}
                commentsData={commentsData}
                handlePagination={handlePagination}
              />
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
    /*     if (productSlug) {
      const data = store.dispatch(catalogItemGET.initiate(productSlug));
      console.log({ ssr: data.unwrap() });
      data.then((response) => {
        console.log({ ssrdata: response.data.data });
        const d = store.dispatch(
          commentsProductListGET.initiate({
            id: response.data.data.product.id,
            data: { page: 1, per_page: 3 },
          })
        );
        
        d.then((response2) => {
          return response2.data;
        });
          console.log({comments: comments});
      });
    }
 */
    if (productSlug) {
      store.dispatch(catalogItemGET.initiate(productSlug));
    }
    const productId = await fetchProductId(productSlug);
    if (productId) {
      store.dispatch(
        commentsProductListGET.initiate({
          id: productId,
        })
      );
    }

    await Promise.all(store.dispatch(getRunningQueriesThunk()));
    return {
      props: {},
    };
  }
);

/* Solution for fetch request*/

// export async function getServerSideProps(context) {
//   const { productSlug } = context.query;
//   const productResponse = await fetch(
//     `https://dropshop.demka.online/api/variation/${productSlug}`,
//     {
//       method: 'GET',
//       headers: {
//         Accept: 'application/json',
//         sHost: 'paw.shop',
//         'Cache-Control': 'no-cache',
//       },
//     }
//   );
//   const productData = await productResponse.json();
//
//   const productId = await fetchProductId(productSlug);
//   const commentsResponse = await fetch(
//     `https://dropshop.demka.online/api/comments/products/${productId}`,
//     {
//       method: 'GET',
//       headers: {
//         Accept: 'application/json',
//         sHost: 'paw.shop',
//         'Cache-Control': 'no-cache',
//       },
//     }
//   );
//   const commentsData = await commentsResponse.json();
//   const allData = {
//     productSlug,
//     productId,
//     product: productData,
//     comments: commentsData,
//   };
//   return {
//     props: {
//       allData,
//     },
//   };
// }  