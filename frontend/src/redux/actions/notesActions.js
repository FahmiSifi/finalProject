import axios from "axios"
import {
    CREATE_NOTES_FAIL, CREATE_NOTES_REQUEST, CREATE_NOTES_SUCCESS,
    DELETE_NOTES_FAIL,
    DELETE_NOTES_REQUEST,
    DELETE_NOTES_SUCCESS,
    GET_GROUPNOTES_FAIL,
    GET_GROUPNOTES_REQUEST,
    GET_GROUPNOTES_SUCCESS,
    GET_NOTES_FAIL, GET_NOTES_REQUEST, GET_NOTES_SUCCESS,
    UPDATE_NOTES_FAIL, UPDATE_NOTES_REQUEST, UPDATE_NOTES_SUCCESS
} from "../constantes/noteConstantes"


export const getNotesList = () => async (dispatch,getState)=>{
    //const apiUrl='http://localhost:5000'

    try
    {
        dispatch({ type: GET_NOTES_REQUEST })
    
        const { userLogin: {userInfo}
              }=getState()
    
    const config = {
        
        headers: {
              authorization:userInfo.token
          }
    }
        const { data } = await axios.get(`/api/notes`, config)
        
    
        dispatch({ type: GET_NOTES_SUCCESS, payload: data })
    
    } catch (error) {
        
        dispatch({ type:GET_NOTES_FAIL,payload:error.response.data })

    }
    


}

export const getGroupNotesList = () => async (dispatch, getState) => {
  //const apiUrl = "http://localhost:5000";

  try {
    dispatch({ type: GET_GROUPNOTES_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        authorization: userInfo.token,
      },
    };
    const { data } = await axios.get(`/api/notes/group`, config);

    dispatch({ type: GET_GROUPNOTES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_GROUPNOTES_FAIL, payload: error.response.data });
  }
};




export const createNoteAction =(title,content,category) => async (dispatch,getState) => {

        //const apiUrl = 'http://localhost:5000'

    try {
        dispatch({ type: CREATE_NOTES_REQUEST })
        
        const { userLogin: { userInfo } } = getState()
        
        const config = {
            headers: {
            authorization: userInfo.token,
          },
        };

        const { data } = await axios.post(
          `/api/notes/create`,
          { title, content, category },
          config
        );
        
        dispatch({type:CREATE_NOTES_SUCCESS,payload:data})
    
    
    } catch (error) {
        
        dispatch({ type: CREATE_NOTES_FAIL, payload: error.response.data.message })
        
    }



}



export const updateNoteAction = (title,content,category,id) => async (dispatch,getState) => {
       
     //const apiUrl = 'http://localhost:5000'

    try {
        dispatch({ type: UPDATE_NOTES_REQUEST })
        
        const { userLogin: { userInfo } } = getState()
        
        const config = {
            headers: {
                authorization:userInfo.token
            }
        }

        const { data } = await axios.put(
          `/api/notes/${id}`,
          { title, content, category },
          config
        );
        dispatch({type:UPDATE_NOTES_SUCCESS,payload:data})
    
    
    } catch (error) {

                dispatch({ type:UPDATE_NOTES_FAIL,payload:error.response.data.message})

    }



}




export const deleteNoteAction = (id) => async (dispatch,getState) => {
    
    //const apiUrl = 'http://localhost:5000'

    try {
         dispatch({ type: DELETE_NOTES_REQUEST })
    
        const { userLogin:{userInfo}}=getState()
        const config = {
            headers: {
                authorization:userInfo.token 
            }
        }
         
        const { data } = await axios.delete(
          `/api/notes/${id}`,
          config
        );

          dispatch({type:DELETE_NOTES_SUCCESS,payload:data})
    
    } catch (error) {

        dispatch({type:DELETE_NOTES_FAIL,payload:error.response.data.payload})
        
    }
    
   



}