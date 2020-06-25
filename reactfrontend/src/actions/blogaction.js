import axios from 'axios';
import { createMessage } from './actionmesasge.js';
import { GET_BLOG, DELETE_BLOG, ADD_BLOG, GET_ERRORS } from './types';

// GET BLOGS
export const getBlog = () => dispatch => {
    axios.get('/api/blog/')
    .then(response => {
        console.log('===Get Blog Action===');
        dispatch({
            type: GET_BLOG,
            payload: response.data
        });
    }).catch(err => console.log(err));
};

// DELETE BLOGS
export const deleteBlog = (id) => dispatch => {
    axios.delete(`/api/blog/${id}/`)
    .then((response) => {
        console.log('===Delete Blog Action===');
        dispatch(createMessage({ 
            blogDeleted: 'Blog Deleted' 
        }));
        dispatch({
            type: DELETE_BLOG,
            payload: id,
        });
    }).catch((err) => console.log(err.response));
};

// ADD BLOGS
export const addBlog = (blog) => dispatch => {
    axios.post('/api/blog/', blog)
    .then(response => {
        console.log('===Get Blog Action===');
        dispatch(createMessage({ 
            blogAdded: 'Blog Added' 
        }));
        dispatch({
            type: ADD_BLOG,
            payload: response.data
        });
    })
    .catch(err =>  {
        const errors = {
            message: err.response.data,
            status: err.response.status
        }
        dispatch({
            type: GET_ERRORS,
            payload: errors
        });
    });
};