import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiCall = createApi({
  reducerPath: 'apiCall',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.themoviedb.org/3/discover`,
  }),
  endpoints: builder => ({
    getDataMovie: builder.query({
     query:()=>({
        url:'movie?api_key=1ea38c820a019f5dd4c59b793c0f41dc&page=1',
        method:'get',
        
     })
    }),
    getDataSeries: builder.query({
     query:()=>({
        url:'tv?api_key=1ea38c820a019f5dd4c59b793c0f41dc',
        method:'get',
     })
    }),
}),
});

export const {
  useGetDataMovieQuery,
  useGetDataSeriesQuery
} = apiCall;
