import { GET_ERRORS, GET_BLOG } from '../actions/types.js';

const initialState = {
    message: {},
    status: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ERRORS:
            return {
                message: action.payload.message,
                status: action.payload.status
            };
        default:
            return state;
    }
}