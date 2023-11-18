import { ADD_USER_SUCCESS, GET_ALLUSER_SUCCESS, GET_CURRENT_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL } from "../Const/Constuser"



const initialstate={
   users:[],
   currentuser:{},
  error:{}

}



export const    userReducer =(state=initialstate,{type,payload})=>{



    switch (type) {
        case ADD_USER_SUCCESS :
            return { ...state }
        case REGISTER_FAIL:
            return { ...state, errors: payload,errors:payload }
        case LOGIN_SUCCESS:
            localStorage.setItem("token", payload.token)
            return { ...state, currentuser: payload.user ,errors:{}}
        case LOGIN_FAIL:
            return {...state,errors:payload}
        case GET_CURRENT_SUCCESS:
            return { ...state, currentuser: payload}
        case LOGOUT:
            localStorage.removeItem("token")
        case GET_ALLUSER_SUCCESS:
            return {...state,users:payload}
        case LOGOUT:
            localStorage.removeItem("token")
            return {...state}   
        default:
            return state
    }

    }