import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => `user/${id}`,
    }),
    createUser: builder.mutation({
      query: (newUser) => ({
        url: "/user/register",
        method: "POST",
        body: newUser,
      }),
    }),
    loginUser: builder.mutation({
      query: (newUser) => ({
        url: "/user/login",
        method: "POST",
        body: newUser,
      }),
    }),
  }),
});

export const { useGetUserQuery, useCreateUserMutation, useLoginUserMutation } =
  userApi;
export default userApi;
