import {LOAD_POSTS} from '../types/types';

const initialState = {
    posts: [],
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_POSTS:
        return {
            posts: action.payload,
        }

        case 'DELETE':
            return {
                posts: [],
            }
        default:
            return state;
    }
}