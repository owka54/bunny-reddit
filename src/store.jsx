import { configureStore } from "@reduxjs/toolkit";

import themeReducer from './features/colorChange/colorChangeSlice'
import postSourceReducer from './features/posts/postSourceSlice'

const store = configureStore({
    reducer: {
        theme: themeReducer,
        source: postSourceReducer
    }
})

export default store