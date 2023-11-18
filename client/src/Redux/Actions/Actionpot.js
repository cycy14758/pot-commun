import axios from "axios"
import { GET_ALLPOTS_FAIL, GET_ALLPOTS_SUCCESS,ADD_ALLPOTS_SUCCESS, ADD_ALLPOTS_FAILL ,EDIT_ALLPOTS_SUCCESS,EDIT_ALLPOTS_FAILL,GET_BY_NAME, GET_POT_SUCCESS, GET_POT_FAIL} from "../Const/Constpot";



export const getAllPots = () => async (dispatch) => {
 
  try {
 const res = await axios.get("http://localhost:5000/api/pots")
    dispatch({
      type: GET_ALLPOTS_SUCCESS,
      payload: res.data
     
    });
   console.log(res.data);
  }

  catch (err) {
    console.log(err)
    dispatch({
      type: GET_ALLPOTS_FAIL,
      payload: err.message
    });
  }}
  
export const addpot = (body,navigate) => async (dispatch) => {
 
    try {
   const resPots = await axios.post("http://localhost:5000/api/pots",body)
      dispatch({
        type: ADD_ALLPOTS_SUCCESS,
        payload:  resPots.data
       
      });
   navigate('/home')
    }
  
    catch (err) {
      console.log(err)
      dispatch({
        type: ADD_ALLPOTS_FAILL,
        payload: err.response.data
      });
    }}
    export const editpot = (body,navigate) => async (dispatch) => {
 
        try {
       const resPots = await axios.post("http://localhost:5000/api/pots",body)
          dispatch({
            type: EDIT_ALLPOTS_SUCCESS,
            payload:  resPots.data
           
          });
       navigate('/home')
        }
      
        catch (err) {
          console.log(err)
          dispatch({
            type: EDIT_ALLPOTS_FAILL,
            payload: err.response.data
          });
        }}
        export const getonepot = (id) => async (dispatch) => {
 
            try {
           const res = await axios.get(`http://localhost:5000/api/product/oneproduct/${id}`)
              dispatch({
                type: GET_POT_SUCCESS,
                payload: res.data
        
              });
        
            }
            catch (err) {
                console.log(err)
                dispatch({
                  type: GET_POT_FAIL,
                  payload: err.response.data
                });
              }}