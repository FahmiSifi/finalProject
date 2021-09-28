import {createStore,combineReducers,applyMiddleware} from 'redux'

import thunk from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'
import { userLoginReducer } from './redux/reducers/userReducers'
import { AllNotesReducer, createNoteReducer, deleteNoteReducer, notesReducer, updateNoteReducer } from './redux/reducers/notesReducers'

const reducer = combineReducers({
  userLogin: userLoginReducer,
  noteList: notesReducer,
  createNote: createNoteReducer,
  updateNote: updateNoteReducer,
  deleteNote: deleteNoteReducer,
  AllNotes: AllNotesReducer,
});




const middleware=[thunk]

const store = createStore(reducer,composeWithDevTools(applyMiddleware(...middleware)))


export default store 