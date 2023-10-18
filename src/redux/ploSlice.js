import { createSlice } from "@reduxjs/toolkit"

const ploSlice = createSlice({
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
        getPLOFail: (state) => {
            state.aplo.isFetching = false
            state.aplo.err = true
        },
        getDetailPLOStart: (state) => {
            state.detailPLO.isFetching = true
        },
        getDetailPLOSuccess: (state, action) => {
            state.detailPLO.isFetching = false
            state.detailPLO.plo = action.payload
        },
        getDetailPLOFail: (state) => {
            state.detailPLO.isFetching = false
            state.detailPLO.err = true
        },
    }
})
export const { getPLOFail, getPLOStart, getPLOSuccess, getDetailPLOFail, getDetailPLOStart, getDetailPLOSuccess } = ploSlice.actions;

export default ploSlice.reducer;