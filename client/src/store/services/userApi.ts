// redux
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// models
import type { Credentials, User } from "../models/user";

const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (newUser: User) => ({
        url: "/user/register",
        method: "POST",
        body: newUser,
      }),
    }),
    loginUser: builder.mutation({
      query: (credential: Credentials) => ({
        url: "/user/login",
        method: "POST",
        body: credential,
      }),
    }),
  }),
});

export const { useCreateUserMutation, useLoginUserMutation } = userApi;
export default userApi;
