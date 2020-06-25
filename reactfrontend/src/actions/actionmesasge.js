import { BLOG_ALERT } from './types';


// Code here to alert user of CRUD events //

// CREATE BLOG ALERT
export const createMessage = message => {
    return {
        type: BLOG_ALERT,
        payload: message
    };
}