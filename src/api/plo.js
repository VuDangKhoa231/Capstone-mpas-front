import { getDetailPLOFail, getDetailPLOStart, getDetailPLOSuccess, getPLOFail, getPLOStart, getPLOSuccess } from "../redux/ploSlice";
import axiosWrapper from "../ultis/axiosWrapper";

export const getPLOlist = async (data, dispatch, accessToken) => {
  dispatch(getPLOStart());
  try {
    const res = await axiosWrapper.get(`/plo/getPloByParkingStatus?pageNum=${data.pageNum}&pageSize=${data.pageSize}&status=${data.status}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
    })
    dispatch(getPLOSuccess(res?.data));

  } catch (error) {
    dispatch(getPLOFail());
  }
}


export const getDetailPLO = async (ploId, dispatch, accessToken) => {
  dispatch(getDetailPLOStart());
  try {

    const res = await axiosWrapper.get(`/plo/getDetailPlo?ploID=${ploId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
    })
    dispatch(getDetailPLOSuccess(res?.data));
  } catch (error) {
    dispatch(getDetailPLOFail())
  }

}
