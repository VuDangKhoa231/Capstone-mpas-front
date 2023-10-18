import { getCusFail, getCusStart, getCusSuccess } from "../redux/customerSlice";
import axiosWrapper from "../ultis/axiosWrapper";

export const getCusList = async (data, dispatch, accessToken) => {
    dispatch(getCusStart());
    try {
      const res = await axiosWrapper.get(`/customer/listCustomer?pageNum=${data.pageNum}&pageSize=${data.pageSize}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
      })
      dispatch(getCusSuccess(res?.data))
    } catch (error) {
      dispatch(getCusFail());
    }
  }
  