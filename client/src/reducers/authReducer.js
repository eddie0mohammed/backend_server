import * as actionTypes from '../actions/types';

const initialState = {
    authenticated:  '',
    errorMessage: ''
};


const authReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.AUTH_USER:
            return {
                ...state,
                authenticated: action.payload
            }
        
        case actionTypes.AUTH_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            }

        default:
            return state;
    }
}

export default authReducer;