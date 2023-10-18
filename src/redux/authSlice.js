import { createSlice } from "@reduxjs/toolkit";
import { getCookie } from "cookies-next";





const authSlice = createSlice({
    name: 'auth',
    initialState: {
        login: {
            currentUser: null,
            isFetching: false,
            error: false,
            accessToken: null,
            isAdmin: null
        },

        logout: {
            isFetching: false,
            error: false
        },
    },

    reducers: {
        loginStart: (state) => {
            state.login.isFetching = true
        },
        loginSuccess: (state, action) => {
            const { access_token, Admin } = action.payload
            state.login.isFetching = false
            state.login.currentUser = Admin
            state.login.error = false
            state.login.accessToken = access_token
            state.login.isAdmin = true
        },
        // isAdmin: (state) => {
        //     state.login.isAdmin = false
        //     state.login.isFetching = false
        // },
        loginFail: (state) => {
            state.login.error = true
            state.login.isFetching = false
        },

        logoutSuccess: (state) => {
            state.logout.isFetching = false
            state.login.currentUser = null
            state.login.accessToken = null
            state.login.isAdmin = null
        },
    }
})
export const { loginStart, loginFail, loginSuccess, logoutSuccess, logoutFail, logoutStart, isAdmin } = authSlice.actions;

export default authSlice.reducer;