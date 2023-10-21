import { createSlice } from "@reduxjs/toolkit"

const dashboardSlice = createSlice ( {
    name: 'dashboard',
    initialState: {
      dashboard: {
        data: null,
        chart: null,
        isFetching: false,
        err: null
      },

      customer: {
       data: null,
       isFetching: false,
       err: null,
       chart: null,
      },

      plo: {
        data: null,
        isFetching: false,
        err: null,
        chart: null,
      }
    },

    reducers: {
        getDashboardStart: (state) => {
            state.dashboard.isFetching = true
        },
        getDashboardSuccess: (state, action) => {
            state.dashboard.isFetching = false
            state.dashboard.data = action.payload
        },
        getDashboardFail : (state) => {
            state.dashboard.isFetching = false
            state.dashboard.err = true
        },

        getDashboardCusStart: (state) => {
            state.customer.isFetching = true
        },
        getDashboardCusSuccess: (state, action) => {
            state.customer.isFetching = false
            state.customer.data = action.payload
        },
        getDashboardCusFail : (state) => {
            state.customer.isFetching = false
            state.customer.err = true
        },

        getDashboardPLOStart: (state) => {
            state.plo.isFetching = true
        },
        getDashboardPLOSuccess: (state, action) => {
            state.plo.isFetching = false
            state.plo.data = action.payload
        },
        getDashboarPLOFail : (state) => {
            state.plo.isFetching = false
            state.plo.err = true
        },
    }
})
export const { getDashboardStart, getDashboardSuccess, getDashboardFail ,getDashboardPLOStart, getDashboardPLOSuccess,getDashboarPLOFail,getDashboardCusFail, getDashboardCusStart , getDashboardCusSuccess } = dashboardSlice.actions;

export default dashboardSlice.reducer;