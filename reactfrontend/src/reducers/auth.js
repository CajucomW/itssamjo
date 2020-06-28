import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR
} from '../actions/types.js';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
}

export default function(state = initialState, action) {
    console.log('===Auth.JS===')
    switch (action.type) {
        case USER_LOADING:
            console.log('===UserLoading===')
            return {
                ...state,
                isLoading: true
            };
        case USER_LOADED:
            console.log('===UserLoaded===')
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            };
        case AUTH_ERROR:
            localStorage.removeItem('token');
            console.log('===AuthError===')
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            };
        default:
            return state;
    }
}