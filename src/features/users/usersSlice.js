import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Dave Gray' },
    { id: '1', name: 'Brad Traversy' },
    { id: '2', name: 'Bilal Zafar' }
];

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;