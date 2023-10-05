import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";

// store is a global state that saves data of our application
// reducer allows us to get a piece of data from the store
export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
});