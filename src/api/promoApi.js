import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./api.config";

export const promoApi = createApi({
  reducerPath: "promoApi",
  baseQuery: baseQuery,
  tagTypes: ["Promo"],
  endpoints: (builder) => ({
    incomingsSave: builder.mutation({
      query: (data) => {
        return {
          url: `incomings/`,
          method: `POST`,
          body: data,
        };
      },
      invalidatesTags:["Promo"],
    }),
  }),
});
export const {
  useIncomingsSaveMutation,
} = promoApi;
