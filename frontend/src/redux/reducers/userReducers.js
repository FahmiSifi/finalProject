import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "../constantes/userConstantes";

const infoFromLocalStorage = localStorage.getItem("info")
  ? JSON.parse(localStorage.getItem("info"))
  : null;   
const initialState = {
    userInfo:infoFromLocalStorage
}

export const  userLoginReducer = (state=initialState, { type, payload }) => {
    switch (type) {
        case USER_LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error:null
            }
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                error:null,
                userInfo:payload 
            }
        case USER_LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error:payload 
            }
        case USER_LOGOUT:
            return {
                ...state,
                error:null,
                userInfo:null
            }

            
    
        default:
            return state 
            
    }
    
}