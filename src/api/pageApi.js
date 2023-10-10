import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./api.config";

export const pageApi = createApi({
  reducerPath: "pageApi",
  baseQuery: baseQuery,
  tagTypes: ["Pages"],
  endpoints: (builder) => ({
    pageHomeGET: builder.query({
      query: () => {
        return {
          url: `pages/home`,
          method: `GET`,
        };
      },
      providesTags: ["Pages"],
    }),

  }),
});
export const {
  usePageHomeGETQuery,
} = pageApi;
