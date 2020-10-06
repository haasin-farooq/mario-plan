import authReducer from './authReducer';
import projectReducer from './projectReducer';
 
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'; // Pre-made reducer for syncing our firestore data with our state in the background  
import { firebaseReducer } from 'react-redux-firebase'; // Pre-made reducer for syncing the authentication state with our redux store

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer, // this reducer will automatically retrieve data from the database and sync it with the store state, depending on the currently active component
    firebase: firebaseReducer
});

export default rootReducer;