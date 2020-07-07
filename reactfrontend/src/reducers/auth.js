import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../actions/types.js';

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    isLoading: false,
    user: null
};

export default function(state = initialState, action) {
    console.log('===ReducerAuth===');
    switch (action.type) {
        case USER_LOADING:
            console.log('===ReducerUserLoading===');
            return {
                ...state,
                isLoading: true,
            };
        case USER_LOADED:
            console.log('===ReducerUserLoaded===');
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload,
            };
        case LOGIN_SUCCESS:
            console.log('===LoginSuccess===');
            localStorage.setItem(
                'token', 
                action.payload.token
            );
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
            };
        case AUTH_ERROR:
        case LOGIN_FAIL:
            console.log('===AuthError===');
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false,
            };
        default:
            return state;
    }
}