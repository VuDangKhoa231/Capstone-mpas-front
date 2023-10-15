import { createSlice } from "@reduxjs/toolkit"

const customerSlice = createSlice ( {
    name: 'customer',
    initialState: {
      customer: {
        customers: null,
        isFetching: false,
        err: null
      },
      detailPLO: {
       plo: null,
       isFetching: false,
       err: null
      }
    },

    reducers: {
        getCusStart: (state) => {
            state.customer.isFetching = true
        },
        getCusSuccess: (state, action) => {
            state.customer.isFetching = false
            state.customer.customers = action.payload
        },
        getCusFail : (state) => {
            state.customer.isFetching = false
            state.customer.err = true
        },
    }
})
export const {  getCusStart, getCusSuccess, getCusFail} = customerSlice.actions;

export default customerSlice.reducer;