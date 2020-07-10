import axios from 'axios';
import { returnErrors } from './actionmesasge.js';
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types.js'

export const loadUser = () => (dispatch, getState) => {
    console.log('===ActionLoadUser===');
    dispatch({ type: USER_LOADING });

//  LOAD USER
    axios.get('/api/auth/user', tokenConfig(getState))
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

//  REGISTER

export const register = ({
    username,
    password,
    email
}) => dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    const body = JSON.stringify({
        username,
        password,
        email
    });

    axios
        .post("/api/auth/register", body, config)
        .then(response => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: response.data
            });
        })
        .catch(err => {
            dispatch(returnErrors(
                err.response.data,
                err.response.status
            ));
            dispatch({
                type: REGISTER_FAIL
            });
        })
}

//  LOGOUT

export const logout = () => (dispatch, getState) => {
    axios
        .post("/api/auth/logout/", null, tokenConfig(getState))
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
};

//  Create constant to DRY up code:
export const tokenConfig = getState => {
//  Get token:
    const token = getState().auth.token;
//  Set Headers:
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
//  Add token to headers configuration:
    if (token) {
        config.headers["Authorization"] = `Token ${token}`;
    }

    return config;
}