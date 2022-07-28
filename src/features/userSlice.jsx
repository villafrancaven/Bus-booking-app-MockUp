import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        product: null,
        userLogin: null
    },
    reducers: {
        signUp: (state, action) => {
            state.user = action.payload;
        },
        login: (state, action) => {
            state.userLogin = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
        toPayment: (state, action) => {
            state.product = action.payload;
        }
    }
})

export const {signUp, login, logout, toPayment} = userSlice.actions;
export const selectUser = (state) => state.user.user;
export const selectProduct = (state) => state.user.product;
export const selectLoginState = (state) => state.user.userLogin;
export default userSlice.reducer;