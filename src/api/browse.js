import { getBrowseFail, getBrowseHistoryFail, getBrowseHistoryStart, getBrowseHistorySuccess, getBrowseStart, getBrowseSuccess, getDetailBrowseFail, getDetailBrowseStart, getDetailBrowseSuccess } from "../redux/browseSlice";
import { getDetailPLOFail, getDetailPLOStart, getDetailPLOSuccess } from "../redux/ploSlice";
import axiosWrapper from "../ultis/axiosWrapper";

export const getBrowselist = async (data, dispatch, accessToken) => {
  dispatch(getBrowseStart());
  let url = `/plo/getRegistrationByParkingStatus?pageNum=${data.pageNum}&pageSize=${data.pageSize}&status=2`;
  if(data.searchValue && data.searchValue?.trim() !== ""){
    url = `/plo/getRegistrationByParkingStatus?keywords=${data.searchValue}&pageNum=${data.pageNum}&pageSize=${data.pageSize}&status=2`;
  }
  console.log('logURRL', url);
  try {

    const res = await axiosWrapper.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
    })
    dispatch(getBrowseSuccess(res?.data));
  } catch (error) {
    dispatch(getBrowseFail());
  }
}


export const getDetailBrowse = async (ploId, dispatch, accessToken) => {
  dispatch(getDetailBrowseStart());
  try {
    const res = await axiosWrapper.get(`/plo/getRegistrationDetail?ploID=${ploId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
    })
    dispatch(getDetailBrowseSuccess(res?.data));
  } catch (error) {
    dispatch(getDetailBrowseFail())
  }
} 


export const getBrowseHistory = async (data, dispatch, accessToken) => {
    dispatch(getBrowseHistoryStart());
  
    let url = `/plo/getRegistrationHistory?pageNum=${data.pageNum}&pageSize=${data.pageSize}&status=2`;
    if(data.searchValue && data.searchValue?.trim() !== ""){
      url = `/plo/getRegistrationHistory?keywords=${data.searchValue}&pageNum=${data.pageNum}&pageSize=${data.pageSize}&status=2`;
    }
    try {
      const res = await axiosWrapper.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
      })
      dispatch(getBrowseHistorySuccess(res?.data));
    } catch (error) {
      dispatch(getBrowseHistoryFail())
    }
  }