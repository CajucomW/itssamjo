import axios from 'axios';
import { GET_BLOG, DELETE_BLOG } from './types';

// GET BLOGS
export const getBlog = () => dispatch => {
    axios.get('/api/blog')
    .then(response => {
        console.log('===Get Blog===');
        dispatch({
            type: GET_BLOG,
            payload: response.data
        });
    }).catch(err => console.log(err));
};

// DELETE BLOGS
export const deleteBlog = (pk) => dispatch => {
    axios.delete(`/api/blog/${pk}/`)
    .then(response => {
        console.log('===Delete Blog===');
        dispatch({
            type: DELETE_BLOG,
            payload: pk
        });
    }).catch(err => console.log(err));
};