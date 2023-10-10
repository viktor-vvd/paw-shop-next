import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./api.config";

export const commentsApi = createApi({
  reducerPath: "commentsApi",
  baseQuery: baseQuery,
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
  useCommentsRandomListGETQuery,
  useLazyCommentsRandomListGETQuery,
  useCommentsProductListGETQuery,
  useLazyCommentsProductListGETQuery,
  useCommentsAddPOSTMutation,
} = commentsApi;
