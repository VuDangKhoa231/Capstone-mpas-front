import { createSlice } from "@reduxjs/toolkit"

const browseSlice = createSlice({
    name: 'browse',
    initialState: {
        browseList: {
            list: null,
            isFetching: false,
            err: null
        },

        detailBrowse: {
            browse: null,
            isFetching: false,
            err: null
        },

        browseHistory: {
            browse: null,
            isFetching: false,
            err: null
        }
    },

    reducers: {
        getBrowseStart: (state) => {
            state.browseList.isFetching = true
        },
        getBrowseSuccess: (state, action) => {
            state.browseList.isFetching = false
            state.browseList.list = action.payload
        },
        getBrowseFail: (state) => {
            state.browseList.isFetching = false
            state.browseList.err = true
        },
        getDetailBrowseStart: (state) => {
            state.detailBrowse.isFetching = true
        },
        getDetailBrowseSuccess: (state, action) => {
            state.detailBrowse.isFetching = false
            state.detailBrowse.browse = action.payload
        },
        getDetailBrowseFail: (state) => {
            state.detailBrowse.isFetching = false
            state.detailBrowse.err = true
        },
        getBrowseHistoryStart: (state) => {
            state.browseHistory.isFetching = true
        },
        getBrowseHistorySuccess: (state, action) => {
            state.browseHistory.isFetching = false
            state.browseHistory.browse = action.payload
        },
        getBrowseHistoryFail: (state) => {
            state.browseHistory.isFetching = false
            state.browseHistory.err = true
        },
    }
})
export const { getBrowseStart, getBrowseSuccess, getBrowseFail, getDetailBrowseStart, getDetailBrowseSuccess, getDetailBrowseFail , getBrowseHistoryFail, getBrowseHistoryStart, getBrowseHistorySuccess} = browseSlice.actions;

export default browseSlice.reducer;