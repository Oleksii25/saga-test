import { LOAD_POSTS } from "../types/types";

export const loadPosts = (posts) => ({
    type: LOAD_POSTS,
    payload: posts,
})

export const deletePosts = () => ({
    type: 'DELETE'
})

export const actionForSaga = () => ({
    type: 'SAGA'
})

export const removePosts = () => ({
    type: 'REMOVE'
})