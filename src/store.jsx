import { configureStore } from "@reduxjs/toolkit";

import themeReducer from './features/colorChange/colorChangeSlice'

const store = configureStore({
    reducer: {
        theme: themeReducer,
    }
})

export default store