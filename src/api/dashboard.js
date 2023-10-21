import { setCookie } from "cookies-next";
import axiosWrapper from "../ultis/axiosWrapper";
import { loginFail, loginStart, loginSuccess } from "../redux/authSlice";
import { getDashboardFail, getDashboardStart, getDashboardSuccess } from "../redux/dashboardSlice";

export const getDashboard = async (dispatch,accessToken) => {
    dispatch(getDashboardStart());
    try {
        const res = await axiosWrapper.get('/custAndPlo/getTotalCustAndPlo', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        dispatch(getDashboardSuccess(res.data));
    } catch (error) {
        dispatch(getDashboardFail());
    }
}



export const chartCustomer = async (data, dispatch) => {
    dispatch(loginStart());
    try {
        const res = await axiosWrapper.post('', {
            method: 'POST',
        });
        dispatch(loginSuccess(res.data));

        setCookie('token', res.data.access_token)
    } catch (error) {
        dispatch(loginFail(error));
    }
}




