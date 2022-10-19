import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    url: 'https://www.reddit.com/r/rabbits.json',
}

const filtersSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filterChanged(state, action) {
            console.log(action.payload);
            const newFilter = action.payload
            state.url = 'https://www.reddit.com/r/rabbits/' + newFilter + '.json'
        }
    }
})

export const { filterChanged } = filtersSlice.actions

console.log(initialState)
export const selectURL = state => state.filter.url;

export default filtersSlice.reducer