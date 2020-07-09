import axios from 'axios';
import { returnErrors } from './actionmesasge.js';
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from './types.js'

// CHECK TOKEN

export const loadUser = () => (dispatch, getState) => {
    console.log('===ActionLoadUser===');
//  USER_LOADING
    dispatch({ type: USER_LOADING });
    const token = getState().auth.token;
//  Right now, token = null. Should it be?

//  HEADERS
    const config = {
        headers: {
            "Content-Type": "application/json"
        },
    };

    console.log('===gets 401 here===', "token is: ", token);

//  IF TOKEN, ADD TO HEADERS CONFIG
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

//  LOAD USER
    axios.get('/api/auth/user', config)
        .then(response => {
            console.log('===Load User API===');
            dispatch({
                type: USER_LOADED,
                payload: response.data
            });
        })
        .catch(err => {
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

//  LOGIN USER

export const login = (username, password) => (dispatch) => {

//  HEADERS
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

//  REQUEST BODY
    const body = JSON.stringify({
        username: username,
        password: password
    });

    console.log('===body===', body);

    axios
        .post('/api/auth/login', body, config)
        .then((response) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data,
            });
        })
        .catch((err) => {
            dispatch(returnErrors(
                err.response.data,
                err.response.status
            ));
            dispatch({
                type: LOGIN_FAIL
            });
        });
}

// LOGOUT

export const logout = () => (dispatch, getState) => {
    const token = getState().auth.token;
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    if (token) {
        config.headers["Authorization"] = `Token ${token}`;
    }

    axios
        .post("/api/auth/logout/", null, config)
        .then (response => {
            dispatch({
                type: LOGOUT,
            });
        })
        .catch(err => {
            dispatch(returnErrors(
                err.response.data,
                err.response.status
            ));
        });
}