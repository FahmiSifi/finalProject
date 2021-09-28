
import axios from "axios"
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "../constantes/userConstantes"

export const login = (email, password) => async (dispatch) => {

   //const apiUrl = "http://localhost:5000";

    try {
        dispatch({ type: USER_LOGIN_REQUEST })
        const { data } = await axios.post(`/api/users/login`, { email, password})
        dispatch({type:USER_LOGIN_SUCCESS,payload:data})
        localStorage.setItem('info',JSON.stringify(data))
    
    } catch (error) {
        dispatch({ type: USER_LOGIN_FAIL, payload:error.response.data.message})
        
    }
    
}

export const logout = () => {
    localStorage.removeItem('info')
    return {
        type:USER_LOGOUT
    }
}