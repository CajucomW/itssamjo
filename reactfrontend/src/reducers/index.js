import { combineReducers } from 'redux';
import blog from './blogreducer.js';
import errors from './errors.js';


export default combineReducers({
    blog,
    errors
});