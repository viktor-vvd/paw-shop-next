import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./api.config";
import { HYDRATE } from "next-redux-wrapper";

export const catalogApi = createApi({
  reducerPath: "catalogApi",
  baseQuery: baseQuery,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    catalogListGET: builder.query({
      query: (data) => {
        return {
          url: `variations/`,
          method: `GET`,
          params: data,
        };
      },
    }),
    catalogItemGET: builder.query({
      query: (data) => {
        return {
          url: `variation/${data}`,
          method: `GET`,
        };
      },
    }),
  }),
});
export const {
  useCatalogListGETQuery,
  useLazyCatalogListGETQuery,
  useCatalogItemGETQuery,
  useLazyCatalogItemGETQuery,
  util: { getRunningQueriesThunk,getRunningMutationsThunk },
} = catalogApi;
export const { catalogListGET, catalogItemGET } = catalogApi.endpoints;
