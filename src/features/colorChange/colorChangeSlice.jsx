import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    theme: 'blueviolet',
}

const colorChangeSlice = createSlice({
    name: 'colorChange',
    initialState,
    reducers: {
        colorChanged(state, action) {
            const newColor = action.payload
            state.theme = newColor
        }
    }
})

export const { colorChanged } = colorChangeSlice.actions

export const selectTheme = state => state.theme.theme;

export default colorChangeSlice.reducer