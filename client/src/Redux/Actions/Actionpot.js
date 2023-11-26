import axios from "axios"
import { GET_ALLPOTS_FAIL, GET_ALLPOTS_SUCCESS,ADD_POTS_SUCCESS, ADD_POTS_FAILL ,EDIT_POTS_SUCCESS,EDIT_POTS_FAILL, GET_POT_SUCCESS, GET_POT_FAIL, srch, DELETE_POT_FAIL, DELETE_POT_SUCCESS} from "../Const/Constpot";



export const getAllPots = () => async (dispatch) => {
 
  try {
    
 const res = await axios.get("http://localhost:5000/api/pot")
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
   const resPots = await axios.post("http://localhost:5000/api/pot",body)
      dispatch({
        type: ADD_POTS_SUCCESS,
        payload:  resPots.data
       
      });
    
   navigate('/')
    }
  
    catch (err) {
      console.log(err)
      dispatch({
        type: ADD_POTS_FAILL,
        payload: err.response.data
      });
    }}

    export const search=(pot)=>{
      return {type:srch ,payload:pot}
      }

    export const editpot = (id,body,navigate) => async (dispatch) => {
 
        try {
       const resPots = await axios.put(`http://localhost:5000/api/pot${id}`,body)
          dispatch({
            type: EDIT_POTS_SUCCESS,
            payload:  resPots.data
           
          });
       navigate('/')
        }
      
        catch (err) {
          console.log(err)
          dispatch({
            type: EDIT_POTS_FAILL,
            payload: err.response.data
          });
        }}
  export const getonepot = (id) => async (dispatch) => {
 
            try {
           const res = await axios.get(`http://localhost:5000/api/pot/onepot/${id}`)
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
   export const deletepot = (potid) => async (dispatch) => {
                try {
                  const res = await axios.delete(`http://localhost:5000/api/pot/${potid}`);
              
                  dispatch({
                    type: DELETE_POT_SUCCESS,
                    payload: potid,
                  });
              
                  dispatch(getAllPots()); 
                } catch (error) {
                  console.error('Error deleting product:', error);
                  dispatch({
                    type: DELETE_POT_FAIL,
                    payload: error.message,
                  });
                  
                }
              };
          