import axios from "axios"
import axiosWrapper from "../ultis/axiosWrapper"

const loginApi = (email, password) => {
    return axiosWrapper.post('/user/loginUser', { id: email, password: password});
}

export {loginApi}