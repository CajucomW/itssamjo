import { BLOG_ALERT } from '../actions/types.js';

const initialState = {}

export default function(state = initialState, action) {
    switch(action.type) {
        case BLOG_ALERT:
            return (
                state = action.payload
            );
        default:
            return state;
    }
}