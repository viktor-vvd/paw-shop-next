import {
  catalogListGET,
  getRunningQueriesThunk,
  useCatalogListGETQuery,
} from "@api/catalogApi";
import Category from "@components/Catalog/Category";
import Filter from "@components/Catalog/Filter";
import Pagination from "@components/Catalog/Pagination";
import Sort from "@components/Catalog/Sort";
import { useRouter } from "next/router";
import Preloader from "@components/base/Preloader";
import ProductCard from "@components/base/ProductCard";
/* import Breadcrumbs from "components/base/Breadcrumbs"; */
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { wrapper } from "@/redux/store";
import { skipToken } from "@reduxjs/toolkit/query";

export default function CatalogPage() {
  const router = useRouter();
  const {
    categorySlug: category,
    sort,
    order,
    page,
  } = JSON.parse(JSON.stringify(router.query));

  console.log(sort);
  const [itemsPerPage, setitemsPerPage] = useState(1);

  const [currentPage, setCurrentPage] = useState(Number(page) || 1);

  const [sortValue, setSortValue] = useState({
    sort: sort || "default",
    order: order || "desc",
  });

  const handlePagination = (selectedPage) => {
    router.push(
      `/catalog/${category}?sort=${sort}&order=${order}&page=${selectedPage}`
    );
    setCurrentPage(selectedPage);
  };

  const handleSortChange = (event) => {
    router.push(
      `/catalog/${category}?sort=${
        JSON.parse(event.target.value)?.sort
      }&order=${
        JSON.parse(event.target.value)?.order
          ? JSON.parse(event.target.value)?.order
          : `desc`
      }&page=1`
    );
    setSortValue(JSON.parse(event.target.value));
    setCurrentPage(1);
  };
  const { data, isLoading, error } = useCatalogListGETQuery(
    typeof category === "string"
      ? {
        sort: sort||"default",
        order: order||"desc",
        page: page||1,
        per_page: 1,
        category: category||"cat",
        }
      : skipToken,
    {
      skip: router.isFallback,
    }
  );

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
          <div className="container-vertical page-container catalog">
            <div className="container-vertical catalog__top">
              {/* <Breadcrumbs item={{ slug: slug }} /> */}
              <h2 className="title">Catalog</h2>
              <Category
                item={{ slug: category }}
                setCurrentPage={setCurrentPage}
              />
            </div>
            <div className="container-vertical outer__container catalog__bottom">
              <div className="container-horisontal container filter-sort">
                <Filter />
                <Sort
                  sortValue={sortValue}
                  handleSortChange={handleSortChange}
                />
              </div>
              <div className="container-horisontal container catalog__products">
                {data?.data &&
                  data.data.map((item, index) => (
                    <ProductCard item={item} key={index} />
                  ))}
              </div>
              {data && data.meta.last_page > 1 && (
                <Pagination
                  setCurrentPage={setCurrentPage}
                  pageCount={data.meta.last_page}
                  forcePage={data.meta.current_page}
                  onPageChange={handlePagination}
                />
              )}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
      const { categorySlug: category, sort, order, page } = context.query;
      if (category) {
        store.dispatch(
          catalogListGET.initiate({
            sort: sort||"default",
            order: order||"desc",
            page: page||1,
            per_page: 1,
            category: category||"cat",
          })
        );
      }
  

    await Promise.all(store.dispatch(getRunningQueriesThunk()));
    return {
      props: {},
    };
  }
);
