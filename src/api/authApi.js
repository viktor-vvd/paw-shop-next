import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./api.config";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: baseQuery,
    tagTypes: ["User"],
    endpoints: (builder) => ({
      registerUser: builder.mutation({
        query: (data) => {
          return {
            url: `register/`,
            method: `POST`,
            body: data,
          };
        },
      }),
      loginUser: builder.mutation({
        query: (data) => {
          return {
            url: `login/`,
            method: `POST`,
            body: data,
          };
        },
        invalidatesTags: ["User"],
      }),
      forgotPassword: builder.mutation({
        query: (data) => {
          return {
            url: `password/forgot/`,
            method: `POST`,
            body: data,
          };
        },
      }),
      logoutUser: builder.mutation({
        query: (data) => {
          return {
            url: `logout/`,
            method: `POST`,
            body: data,
          };
        },
        invalidatesTags: ["User"],
      }),
    }),
  });
  export const {
    useRegisterUserMutation,
    useLoginUserMutation,
    useForgotPasswordMutation,
    useLogoutUserMutation,
  } = authApi;
  