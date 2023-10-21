import { setCookie } from "cookies-next";
import axiosWrapper from "../ultis/axiosWrapper";
import { loginFail, loginStart, loginSuccess } from "../redux/authSlice";

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axiosWrapper.post('/user/loginUser', user )
      dispatch(loginSuccess(res.data));
      navigate("/");
      setCookie('token', res.data.access_token) 
  } catch (error) {
    dispatch(loginFail(error));
  }
}


