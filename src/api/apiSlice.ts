import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ResponseData } from '../types'

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),

	endpoints: builder => ({
		getData: builder.query<ResponseData[], void>({
			query: () => '/response',
		}),
	}),
})

export const { useGetDataQuery } = apiSlice
