import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./api.config";
import { HYDRATE } from "next-redux-wrapper";

export const pageApi = createApi({
  reducerPath: "pageApi",
  baseQuery: baseQuery,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: ["Pages"],
  endpoints: (builder) => ({
    pageGET: builder.query({
      query: (data) => {
        return {
          url: `pages/${data}`,
          method: `GET`,
        };
      },
      providesTags: ["Pages"],
    }),

  }),
});
export const {
  usePageGETQuery,
  util: { getRunningQueriesThunk,getRunningMutationsThunk },
} = pageApi;
export const { pageGET } = pageApi.endpoints;
