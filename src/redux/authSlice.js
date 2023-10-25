import { createSlice } from "@reduxjs/toolkit";
import { getCookie } from "cookies-next";





const authSlice = createSlice({
    name: 'auth',
    initialState: {
        login: {
            currentUser: null,
            isFetching: false,
            error: null,
            accessToken: null,
        },

        logout: {
            isFetching: false,
            error: false
        },
    },

    reducers: {
        loginStart: (state) => {
            state.login.isFetching = true
            state.login.error = null
        },
        loginSuccess: (state, action) => {
            const { access_token, Admin } = action.payload
            state.login.isFetching = false
            state.login.currentUser = Admin
            state.login.error = null
            state.login.accessToken = access_token
        },
        loginFail: (state, action) => {
            state.login.isFetching = false
            state.login.error = true
        },

        logoutSuccess: (state) => {
            state.logout.isFetching = false
            state.login.currentUser = null
            state.login.accessToken = null
            state.login.error = null
        },
    }
})
export const { loginStart, loginFail, loginSuccess, logoutSuccess, logoutFail, logoutStart, isAdmin } = authSlice.actions;

export default authSlice.reducer;