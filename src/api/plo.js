import { getPLOFail, getPLOStart, getPLOSuccess } from "../redux/ploSlice";
import axiosWrapper from "../ultis/axiosWrapper";

 const getPLOlist = async (data, dispatch, accessToken) => {
    dispatch(getPLOStart());
  
  
    try {
      const res = await axiosWrapper.get(`/plo/getPloByParkingStatus?pageNum=1&pageSize=5&status=1`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
          
        },
        })
        dispatch(getPLOSuccess(res?.data));
  
      //     //  "Access-Control-Allow-Origin": "*",
      //     // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      //   },
      //   // withCredentials : true
      // }).then((response) => {
      //   // handle success
      //   console.log(response);
      //   dispatch(getPLOSuccess(res.data));
      // })
      //   .catch(function (error) {
      //     // handle error
      //     console.log(error);
      //   })
      //   .finally(function () {
      //     // always executed
      //   });
      // const res = await axios.get('https://eparking.azurewebsites.net/parking/getParkingStatusID?ploID=PL0934328813', {
      //  headers: {Authorization: `Bearer ${accessToken}`,}, })
    
      //  .then((response) => {
      //     console.log('12345');
      //  }).catch((error) => {
      //   console.log(error);
      //  });
      // dispatch(getPLOSuccess(res.data))
      // console.log('reg', res);
      
    } catch (error) {
      dispatch(getPLOFail());
    }
  }
  

  const getDetailPLO = async (data, dispatch, accessToken) => {
    
    try {
        
    } catch (error) {
        
    }

  }

  export {getPLOlist,}