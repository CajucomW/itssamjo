import { combineReducers } from 'redux';
import blog from './blogreducer.js';
import errors from './errors.js';
import messages from './reducermessages.js';
import auth from './auth';


export default combineReducers({
    blog,
    errors,
    messages,
    auth
});