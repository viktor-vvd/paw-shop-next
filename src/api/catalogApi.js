import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./api.config";

export const catalogApi = createApi({
  reducerPath: "catalogApi",
  baseQuery: baseQuery,
  tagTypes: ["Catalog"],
  endpoints: (builder) => ({
    catalogListGET: builder.query({
      query: (data) => {
        return {
          url: `variations/`,
          method: `GET`,
          params: data,
        };
      },
      providesTags: ["Catalog"],
    }),
    catalogItemGET: builder.query({
      query: (data) => {
        return {
          url: `variation/${data}`,
          method: `GET`,
        };
      },
      providesTags: ["Catalog"],
    }),
  }),
});
export const {
  useCatalogListGETQuery,
  useLazyCatalogListGETQuery,
  useCatalogItemGETQuery,
  useLazyCatalogItemGETQuery,
} = catalogApi;
