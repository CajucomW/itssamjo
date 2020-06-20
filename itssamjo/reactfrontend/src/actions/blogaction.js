import axios from 'axios';
import { GET_BLOG } from './types';

// GET BLOGS
export const getBlog = () => dispatch => {
    axios.get('/api/blog')
    .then(response => {
        dispatch({
            type: GET_BLOG,
            payload: response.data
        });
    }).catch(err => console.log(err));
};