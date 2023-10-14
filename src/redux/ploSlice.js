import { createSlice } from "@reduxjs/toolkit"

const ploSlice = createSlice ( {
    name: 'plo',
    initialState: {
      aplo: {
        allPlo: null,
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
        getPLOStart: (state) => {
            state.aplo.isFetching = true
        },
        getPLOSuccess: (state, action) => {
            state.aplo.isFetching = false
            state.aplo.allPlo = action.payload
        },
        getPLOFail : (state) => {
            state.aplo.isFetching = false
            state.aplo.err = true
        },
    }
})
export const {  getPLOFail, getPLOStart, getPLOSuccess} = ploSlice.actions;

export default ploSlice.reducer;