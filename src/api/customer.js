import { getCusFail, getCusStart, getCusSuccess } from "../redux/customerSlice";
import { getPLOFail,  } from "../redux/ploSlice";

export const getPLOlist = async (data, dispatch, accessToken) => {
    dispatch(getCusStart());
  
  
    try {
      dispatch(getCusSuccess())
    } catch (error) {
      dispatch(getCusFail());
    }
  }
  