import { ADD_ALLPOTS_FAILL, ADD_ALLPOTS_SUCCESS, EDIT_ALLPOTS_FAILL, EDIT_ALLPOTS_SUCCESS, GET_ALLPOTS_FAIL, GET_ALLPOTS_SUCCESS } from "../Const/Constpot"



const initialstate={
    pots:[],
    onepot:{},
   error:{}
 
 }
 

 export const   potsReducer =(state=initialstate,action)=>{
    switch(action.type){
 
        case GET_ALLPOTS_SUCCESS :
            return {...state,pots:action.payload}
  
     case  ADD_ALLPOTS_SUCCESS:
        return {...state}
   case EDIT_ALLPOTS_SUCCESS:
    return {...state,oneproduct:action.payload}
        default:
            return state
        }}