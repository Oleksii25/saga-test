import { takeEvery, put, call } from 'redux-saga/effects'
import { deletePosts, loadPosts } from '../actions/actions';

const base_url = 'https://jsonplaceholder.typicode.com/posts?_limit=10'

function* workerSaga() {
    const data = yield call(getPosts);
    yield put(loadPosts(data))
}

function* removePosts() {
    yield put(deletePosts())
}

export function* rootSaga() {
    yield takeEvery('SAGA', workerSaga);
    yield takeEvery('REMOVE', removePosts)
}

const getPosts = async() => {
    const result = await fetch(base_url);
    return await result.json();
}