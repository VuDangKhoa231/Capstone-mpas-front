import { createSlice } from "@reduxjs/toolkit"

const dashboardSlice = createSlice ( {
    name: 'dashboard',
    initialState: {
      dashboard: {
        data: null,
        isFetching: false,
        err: null
      },

      customer: {
       data: null,
       isFetching: false,
       err: null,
      },

      ploParking: {
        data: null,
        isFetching: false,
        err: null,
      },

      ploParkingRevenue: {
        data: null,
        isFetching: false,
        err: null,
      }
    },

    reducers: {
        //DashboardTotal
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

        //Customer
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


        // ploParking
        getDashboardPLOParkingStart: (state) => {
            state.ploParking.isFetching = true
        },
        
        getDashboardPLOParkingSuccess: (state, action) => {
            state.ploParking.isFetching = false
            state.ploParking.data = action.payload
        },
        
        getDashboardPLOParkingFail : (state) => {
            state.ploParking.isFetching = false
            state.ploParking.err = true
        },

        // ploParkingRevenue
        getDashboardPLOParkingRevenueStart: (state) => {
            state.ploParkingRevenue.isFetching = true
        },
        getDashboardPLOParkingRevenueSuccess: (state, action) => {
            state.ploParkingRevenue.isFetching = false
            state.ploParkingRevenue.data = action.payload
        },
        getDashboardPLOParkingRevenueFail : (state) => {
            state.ploParkingRevenue.isFetching = false
            state.ploParkingRevenue.err = true
        },
    }
})
export const { getDashboardStart, getDashboardSuccess, getDashboardFail,getDashboardCusFail, getDashboardCusStart , getDashboardCusSuccess, getDashboardPLOParkingFail, getDashboardPLOParkingRevenueStart, getDashboardPLOParkingStart, getDashboardPLOParkingSuccess,getDashboardPLOParkingRevenueFail,getDashboardPLOParkingRevenueSuccess } = dashboardSlice.actions;

export default dashboardSlice.reducer;