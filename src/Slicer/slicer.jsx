import { createSlice } from "@reduxjs/toolkit";
const todosSlice = createSlice({
    name: "todos",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        }
    }
});
export const {
    addItem,
    removeItem
} = todosSlice.actions;

export default todosSlice.reducer;
