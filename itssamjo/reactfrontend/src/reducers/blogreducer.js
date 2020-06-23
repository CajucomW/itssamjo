import { GET_BLOG, DELETE_BLOG, ADD_BLOG } from '../actions/types.js';

const initialState = {
    blog: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_BLOG:
            return {
                ...state,
                blog: action.payload,
            };
        case DELETE_BLOG:
            return {
                ...state,
                blog: state.blog.filter((blog) => 
                blog.id !== action.payload),
            };
        case ADD_BLOG:
            return {
                ...state,
                blog: [...state.blog, action.payload]
            };
        default:
            return state;
    }
}