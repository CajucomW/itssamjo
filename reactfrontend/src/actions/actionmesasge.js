import { BLOG_ALERT, GET_ERRORS } from './types';


// Code here to alert user of CRUD events //

// CREATE BLOG ALERT

export const createMessage = message => {
    return {
        type: BLOG_ALERT,
        payload: message
    };
}

// RETURN ERRORS

export const returnErrors = (message, status) => {
    return {
        type: GET_ERRORS,
        payload: { message, status }
    }
}