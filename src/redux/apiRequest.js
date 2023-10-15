// import axios from "axios";
// import { isAdmin, loginFail, loginStart, loginSuccess, logoutStart, logoutSuccess } from "./authSlice";
// import axiosWrapper from "../ultis/axiosWrapper";
// import { getPLOFail, getPLOStart, getPLOSuccess } from "./ploSlice";
// import { getCookie, setCookie } from "cookies-next";
// import { useSelector } from "react-redux";

// export const loginUser = async (user, dispatch, navigate) => {
//   dispatch(loginStart());
//   try {
//     const res = await axiosWrapper.post('/user/loginUser', user);
  
//     // if (res.data !== '') {
//       dispatch(loginSuccess(res.data));
//       navigate("/");
//       setCookie('token', res.data.access_token)
//     // } else {
//     //   dispatch(isAdmin());
//     //   console.log('block');
//     // }
//   } catch (error) {
//     dispatch(loginFail());
//   }
// }



// export const getPLOlist = async (data, dispatch, accessToken) => {
//   dispatch(getPLOStart());


//   try {
//     // const res = await axiosWrapper.get(`/parking/getParkingStatusID?ploID=PL093432881`, {

      

//     //   headers: {
//     //     Authorization: `Bearer ${accessToken}`
//     //     ,

//     //     //  "Access-Control-Allow-Origin": "*",
//     //     // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
//     //   },
//     //   // withCredentials : true
//     // }).then((response) => {
//     //   // handle success
//     //   console.log(response);
//     //   dispatch(getPLOSuccess(res.data));
//     // })
//     //   .catch(function (error) {
//     //     // handle error
//     //     console.log(error);
//     //   })
//     //   .finally(function () {
//     //     // always executed
//     //   });
//     // const res = await axios.get('https://eparking.azurewebsites.net/parking/getParkingStatusID?ploID=PL0934328813', {
//     //  headers: {Authorization: `Bearer ${accessToken}`,}, })
  
//     //  .then((response) => {
//     //     console.log('12345');
//     //  }).catch((error) => {
//     //   console.log(error);
//     //  });
//     // dispatch(getPLOSuccess(res.data))
//     // console.log('reg', res);
    
//   } catch (error) {
//     dispatch(getPLOFail());
//   }
// }

