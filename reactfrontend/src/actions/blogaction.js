import axios from 'axios';
import { createMessage, returnErrors } from './actionmesasge.js';
import { GET_BLOG, DELETE_BLOG, ADD_BLOG } from './types';
import { tokenConfig } from './actionauth.js';

// GET BLOGS
export const getBlog = () => (dispatch, getState) => {
    axios.get('/api/blog/', tokenConfig(getState))
    .then(response => {
        console.log('===Get Blog Action===');
        dispatch({
            type: GET_BLOG,
            payload: response.data
        });
    }).catch(err => 
        dispatch(
            returnErrors (
                err.response.data,
                err.response.status
            )
        ));
};

// DELETE BLOGS
export const deleteBlog = (id) => (dispatch, getState) => {
    console.log("===id===", id);
    axios
    .delete(`/api/blog/${id}/`, tokenConfig(getState))
    .then((response) => {
        console.log('===Delete Blog Action===');
        dispatch(createMessage({ 
            blogDeleted: 'Blog Deleted' 
        }));
        dispatch({
            type: DELETE_BLOG,
            payload: id,
        });
    })
//  .catch((err) => console.log(err.response));
    .catch(err =>
        dispatch(
            returnErrors(
                err.response.data,
                err.response.status
            )
        ));
};

// ADD BLOGS
export const addBlog = (blog) => (dispatch, getState) => {
    axios.post('/api/blog/', blog, tokenConfig(getState))
    .then(response => {
        console.log('===Add Blog Action===');
        dispatch(createMessage({ 
            blogAdded: 'Blog Added' 
        }));
        dispatch({
            type: ADD_BLOG,
            payload: response.data
        });
    })
    .catch(err => 
        dispatch(
            returnErrors (
                err.response.data,
                err.response.status
            )
        ));
};