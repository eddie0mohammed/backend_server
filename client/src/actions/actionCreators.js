import axios from 'axios';
import * as actionTypes from './types';

export const signUp = (formProps, callback) => {

   return async (dispatch) => {
      try{

         const response = await axios.post('http://localhost:3001/signup', formProps);

         dispatch({
            type: actionTypes.AUTH_USER,
            payload: response.data.token
         });
         localStorage.setItem('token', response.data.token);
         callback();

      }catch(e){
         dispatch({
            type: actionTypes.AUTH_ERROR,
            payload: 'Email in use'
         })
      }
   }
}

export const signOut = () => {
   localStorage.removeItem('token');

   return {
      type: actionTypes.AUTH_USER,
      payload: ''
   }
}

export const signIn = (formProps, callback) => {

   return async (dispatch) => {
      try{

         const response = await axios.post('http://localhost:3001/signin', formProps);

         dispatch({
            type: actionTypes.AUTH_USER,
            payload: response.data.token
         });
         localStorage.setItem('token', response.data.token);
         callback();

      }catch(e){
         dispatch({
            type: actionTypes.AUTH_ERROR,
            payload: 'Invalid login credentials'
         })
      }
   }
}
