import {
    CREATE_NOTES_FAIL, CREATE_NOTES_REQUEST, CREATE_NOTES_SUCCESS,
    DELETE_NOTES_FAIL,DELETE_NOTES_REQUEST,DELETE_NOTES_SUCCESS,
    GET_GROUPNOTES_FAIL,
    GET_GROUPNOTES_REQUEST,
    GET_GROUPNOTES_SUCCESS,
    GET_NOTES_FAIL, GET_NOTES_REQUEST, GET_NOTES_SUCCESS,
    UPDATE_NOTES_FAIL, UPDATE_NOTES_REQUEST, UPDATE_NOTES_SUCCESS
} from "../constantes/noteConstantes";

const initState = {
    notes: [],
}

export const notesReducer = (state=initState,{type,payload}) => {
    switch (type) {
        case GET_NOTES_REQUEST:
            return {
                loading:true 
            }
        case GET_NOTES_SUCCESS:
            return {
                loading:false,notes:payload
            }
        case GET_NOTES_FAIL:
            return {
                loading:false,error:payload 
            }
    
    
        default:
            return state
    }

}

export const AllNotesReducer = (state ={all:[]}, { type, payload }) => {
  switch (type) {
    case GET_GROUPNOTES_REQUEST:
      return {
        loading: true,
      };
    case GET_GROUPNOTES_SUCCESS:
      return {
        loading: false,
        all: payload,
      };
    case GET_GROUPNOTES_FAIL:
      return {
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export const createNoteReducer =(state={},{type,payload})=>{
    
       switch (type) {
           case CREATE_NOTES_REQUEST:
               return { loading: true }
           
           case CREATE_NOTES_SUCCESS:
               return { loading: false, success: true }
           
           case CREATE_NOTES_FAIL:
               return {loading:false,error:payload}
               
               
       
           default:
               return state
       }
}


export const updateNoteReducer = (state={}, { type, payload }) => {
    
    switch (type) {
        case UPDATE_NOTES_REQUEST:
            return { loading: true }
        case UPDATE_NOTES_SUCCESS:
            return { loading: false, success: true }
        case UPDATE_NOTES_FAIL:
            return {loading:false,error:payload,success:false}
        
            
    
        default:
            return state
    }



}

export const deleteNoteReducer=(state={},{type,payload})=>{

    switch (type) {
        case DELETE_NOTES_REQUEST:
            return { loading: true }
        
        case DELETE_NOTES_SUCCESS:
            return { loading: false, success:true}

        case DELETE_NOTES_FAIL:
            return {loading:false,error:payload,success:false}
            
            
    
        default:
            return state
    }



}