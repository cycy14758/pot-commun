import { ADD_POTS_SUCCESS, DELETE_POT_SUCCESS, DELETE_PRODUCT_SUCCESS, EDIT_POTS_SUCCESS, GET_ALLPOTS_SUCCESS, GET_POT_SUCCESS, srch } from "../Const/Constpot"



const initialstate={
    pots:[],
    onepot:{},
   error:{}
 
 }
 

 export const   potReducer =(state=initialstate,action)=>{
    switch(action.type){
 
     case GET_ALLPOTS_SUCCESS :
        return {...state,pots:action.payload}
  
     case  ADD_POTS_SUCCESS:
        return {...state}
    case GET_POT_SUCCESS:
        return {...state,onepot:action.payload}
       
   case EDIT_POTS_SUCCESS:
    return {...state,onepot:action.payload}
    case DELETE_POT_SUCCESS:
        return {...state}
    case srch:
        return {...state,pots:[...state.pots.filter(el=>el.title.toLowerCase().includes(action.payload.toLowerCase()))]}
        default:
            return state
        }}