import { configureStore } from "@reduxjs/toolkit";

import themeReducer from './features/colorChange/colorChangeSlice'
import filterReducer from './features/filters/filtersSlice';

const store = configureStore({
    reducer: {
        theme: themeReducer,
        filter: filterReducer
    }
})

export default store