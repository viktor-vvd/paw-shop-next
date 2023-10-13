import { getRunningQueriesThunk } from "@/api/pageApi";
import { pageGET, usePageGETQuery } from "@/api/pageApi";
import Preloader from "@/components/base/Preloader";
import { wrapper } from "@/redux/store";
import Head from "next/head";
import React from "react";

const Home = () => {
  const { data, isLoading, error } = usePageGETQuery("home");
  return error ? (
    <>Oh no, there was an error</>
  ) : isLoading ? (
    <Preloader />
  ) : data ? (
    <div className="container-vertical page-container">
      {data?.seo && (
        <Head>
          <title>{data.seo.title}</title>
          {Object.keys(data.seo).map((item, index) => (
            <meta property={item} content={data.seo[item]} key={item} />
          ))}
        </Head>
      )}
      <div className="title">Home</div>
    </div>
  ) : null;
};

export default Home;
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    if (context) {
      store.dispatch(pageGET.initiate("home"));
    }

    await Promise.all(store.dispatch(getRunningQueriesThunk()));
    return {
      props: {},
    };
  }
);
