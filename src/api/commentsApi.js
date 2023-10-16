import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./api.config";
import { HYDRATE } from "next-redux-wrapper";
/* import {
  buildCreateApi,
  coreModule,
  reactHooksModule,
} from '@reduxjs/toolkit/query/react'

const createApi = buildCreateApi(
  coreModule(),
  reactHooksModule({ unstable__sideEffectsInRender: true })
) */

export const commentsApi = createApi({
  reducerPath: "commentsApi",
  baseQuery: baseQuery,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: ["Comment"],
  endpoints: (builder) => ({
    commentsRandomListGET: builder.query({
      query: (data) => {
        return {
          url: `comments/products/random`,
          method: `GET`,
          params:data,
        };
      },
      providesTags: ["Comment"],
    }),
    commentsProductListGET: builder.query({
      query: ({data, id}) => {
        return {
          url: `comments/products/${id}`,
          method: `GET`,
          params:data,
        };
      },
      providesTags: ["Comment"],
    }),
    commentsAddPOST: builder.mutation({
      query: ({data, id}) => {
        return {
          contentType: "multipart/form-data",
          url: `comments/products/${id}`,
          method: `POST`,
          body: data,
        };
      },
      invalidatesTags:["Comment"],
    }),
  }),
});
export const {
  useCommentsProductListGETQuery,
  useLazyCommentsProductListGETQuery,
  util: { getRunningQueriesThunk },
} = commentsApi;
export const { commentsProductListGET } = commentsApi.endpoints;
