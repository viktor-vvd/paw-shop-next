import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./api.config";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: baseQuery,
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    cartGET: builder.query({
      query: () => {
        return {
          url: `carts/`,
          method: `GET`,
        };
      },
      providesTags: ["Cart"],
    }),
    addToCartPOST: builder.mutation({
      query: ({id, data}) => {
        return {
          url: `carts/${id}/add/`,
          method: `POST`,
          body: data,
        };
      },
      invalidatesTags: ["Cart"],
    }),
    removeFromCartPOST: builder.mutation({
      query: ({id, data}) => {
        return {
          url: `carts/${id}/remove/`,
          method: `POST`,
          body: data,
        };
      },
      invalidatesTags: ["Cart"],
    }),
    addPromocodePOST: builder.mutation({
      query: (data) => {
        return {
          url: `carts/promocode/add`,
          method: `POST`,
          body: data,
        };
      },
      invalidatesTags: ["Cart"],
    }),
    removePromocodePOST: builder.mutation({
      query: (data) => {
        return {
          url: `carts/promocode/remove`,
          method: `POST`,
          body: data,
        };
      },
      invalidatesTags: ["Cart"],
    }),
  }),
});
export const {
    useCartGETQuery,
  useLazyCartGETQuery,
  useAddToCartPOSTMutation,
  useRemoveFromCartPOSTMutation,
  useAddPromocodePOSTMutation,
  useRemovePromocodePOSTMutation
} = cartApi;
