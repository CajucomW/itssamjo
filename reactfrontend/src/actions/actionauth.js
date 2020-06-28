import axios from 'axios';
import { returnErrors } from './actionmesasge.js';
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from './types.js'

// CHECK TOKEN

export const loadUser = () => (dispatch, getState) => {
    console.log('===LoadUser===');
    // USER_LOADING
    dispatch({
        type: USER_LOADING
    });

    // GET TOKEN
    const token = getState().auth.token;

    // HEADERS
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    // IF TOKEN, ADD TO HEADERS CONFIG
    if (token) {
        console.log('===Config Headers===');
        config.headers['Authorization'] = `Token ${token}`;
    }

    // LOAD USER
    axios.get('/api/auth/user', config)
        .then(response => {
            console.log('===Load User API===');
            dispatch({
                type: USER_LOADED,
                payload: response.data
            });
        }).catch(err => {
            dispatch(
                returnErrors(
                    err.response.data, 
                    err.response.status
                ));
            dispatch({
                type: AUTH_ERROR
            });
        });
}

// LOGIN USER

export const login = (username, password) => dispatch => {
    // HEADERS
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    //REQUEST BODY
    const body = JSON.stringify({
        username,
        password
    });

    axios
    .post('/api/auth/login', body, config)
    .then(response => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data
        });
    })
    .catch(err => {
        dispatch(returnErrors(
            err.response.data,
            err.response.status
        ));
        dispatch({
            type: LOGIN_FAIL
        });
    });
}