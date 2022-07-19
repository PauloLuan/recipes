import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { UserDataResponse, RepositoriesRootResponse } from './types'

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com'
  }),
  endpoints: (build) => ({
    fetchUserData: build.query<UserDataResponse, string>({
      query: (username = 'pauloluan') => `/users/${username}`
    }),
    fetchUserRepositories: build.query<RepositoriesRootResponse, string>({
      query: (username = 'pauloluan') => `/users/${username}/repos`
    })
  })
})

export const {
  usePrefetch,
  useFetchUserDataQuery,
  useFetchUserRepositoriesQuery
} = api
