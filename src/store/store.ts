import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {weatherApi} from "@/store/forecast/forecast.api";
import {weatherReducer} from "@/store/reducers/ForecastSlice";

const rootReducer = combineReducers({
      weather: weatherReducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(weatherApi.middleware)
    })
}

// export const store  = configureStore({
//     reducer: {
//
//     },
//     middleware: getDefaultMiddleware =>
//         getDefaultMiddleware().concat(weatherApi.middleware),
// })

// export type TypeRootState = ReturnType<typeof rootReducer.getState>

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']