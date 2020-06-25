import { combineReducers } from 'redux';
import blog from './blogreducer.js';
import errors from './errors.js';
import messages from './reducermessages.js';


export default combineReducers({
    blog,
    errors,
    messages
});