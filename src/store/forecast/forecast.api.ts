import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {IRoot} from "@/store/forecast/forecast.types";

export const weatherApi = createApi({
    reducerPath: "api/weather",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.weatherapi.com/v1" }),
    endpoints: (build) => ({
        getCity: build.query<IRoot, string>({
           query: (q: string = 'london') => ({
               url: `/search.json?&key=192344d4755f4dcda5a125134232005&q=${q}`
           })
        }),
        getCurrent: build.query<IRoot,{ q: string }>({
            query: ({q = 'London'}) => ({
                url: `/forecast.json?&key=192344d4755f4dcda5a125134232005`,
                params: {
                    q
                },
            }),
        }),
        getWeather: build.query<IRoot,{ q: string, days: number }>({
            query: ({ q = 'London', days = 7 }) => ({
                url: `/forecast.json?&key=192344d4755f4dcda5a125134232005`,
                params: {
                    q,
                    days: days,
                },
            }),
        }),
    }),
});

export const {
    useGetCityQuery,
    useGetCurrentQuery,
    useGetWeatherQuery
} = weatherApi;
