import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = ''

const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        setFilter(state, action) {
        state = action.payload
        }
    }
})

// Експортуємо генератори екшенів та редюсер
export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;


// export const filterReducer = createReducer(filtersInitialState, {
//     [setFilter]: (state, action) => {
//         return {state: action.payload}
//     }
// })
