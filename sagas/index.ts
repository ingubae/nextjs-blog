import { all, call } from 'redux-saga/effects';
import posts from './posts';

export default function* rootSaga() {
    yield all([call(posts)]);
}