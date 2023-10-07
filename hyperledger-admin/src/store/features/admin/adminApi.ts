import { apiSlice } from "../api/apiSlice";

export const adminApi = apiSlice
  .enhanceEndpoints({ addTagTypes: ["AdminAuth", "Institution"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      loginAdmin: builder.mutation<any, any>({
        query: (body) => ({
          url: "/auth/admin-login",
          method: "POST",
          body,
        }),
        invalidatesTags: ["AdminAuth"],
      }),
      registerAdmin: builder.mutation<any, any>({
        query: (body) => ({
          url: "/auth/admin-register",
          method: "POST",
          body,
        }),
        invalidatesTags: ["AdminAuth"],
      }),
      getInstitution: builder.query<
        any,
        { page?: number; limit?: number } | void
      >({
        query: (queryParams) =>
          `/admin/institution-list?page=${queryParams?.page || 1}&limit=${
            queryParams?.limit || 10
          }`,
        providesTags: ["Institution"],
      }),
      updateInstitutionStatus: builder.mutation<any, any>({
        query: (institution) => ({
          url: `/admin/institution/${institution.id}`,
          method: "PATCH",
          body: institution,
        }),
        invalidatesTags: ["Institution"],
      }),
    }),
  });

export const {
  useLoginAdminMutation,
  useRegisterAdminMutation,
  useGetInstitutionQuery,
  useUpdateInstitutionStatusMutation,
} = adminApi;
