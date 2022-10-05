import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const baseUrl = 'https://www.reddit.com/r/rabbits'
export const redditUrl = 'https://www.reddit.com'

export const urlFilters = {
    default: '',
    hot: '/hot',
    new: '/new',
    top: '/top',
    rising: '/rising',
}

export const fetchBunnyData = createAsyncThunk('fetchdata', async (url) => 
    await fetch(url)
    .then(response => (response.ok ? response : Promise.reject(response)))
    .then(response => response.json())
)

const initialState = {
    status: 'idle',
    url: baseUrl + urlFilters.default + '.json',
    error: null,
    data: [],
}

const postSourceSlice = createSlice({
    name: 'source',
    initialState,
    reducers: {
        filterChanged(state, action) {
            const page = action.payload
            state.url = baseUrl + urlFilters[page] + '.json'
            state.status = 'idle'
        },
        urlChanged(state, action) {
            const page = action.payload
            state.url = redditUrl + page + '.json'
            state.status = 'idle'
        }
    },
    extraReducers: {
        [fetchBunnyData.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchBunnyData.fulfilled]: (state, action) => {
            const newData = action.payload;
            state.data = newData;
            state.status = 'succeeded'
        },
        [fetchBunnyData.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})

export const { filterChanged, urlChanged } = postSourceSlice.actions

export const selectUrl = state => state.source.url;
export const selectPosts = state => state.source.data;

export default postSourceSlice.reducer
