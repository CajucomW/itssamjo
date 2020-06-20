import { GET_BLOG } from '../actions/types.js';

const initialState = {
    blog: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_BLOG:
            return {
                ...state,
                blog: action.payload
            }
        default:
            return state;
    }
}