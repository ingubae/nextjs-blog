import axios from "axios";
import { loadPostsAsync } from "../reducers/posts";
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';

async function loadAllPostsAPI(query: any) {
    return await axios.get('/posts');
}

function* loadAllPosts(action: ReturnType<typeof loadPostsAsync.request>) {
    try {
        const result = yield call(loadAllPostsAPI, action.payload);
        yield put(loadPostsAsync.success(result.data));
    } catch (error) {
        console.error(error);
        yield put(loadPostsAsync.failure(error));
    }
}

function* watchLoadAllPosts() {
    yield takeLatest(loadPostsAsync.request, loadAllPosts);
}

export default function* postsSaga() {
    yield all([fork(watchLoadAllPosts)]);
}