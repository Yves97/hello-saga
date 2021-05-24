import { takeLatest,takeEvery } from 'redux-saga/effects'
import { SET_POST, SET_USERS } from '../actionTypes'
import { handlePost } from './handlers/post';
import { handleGetUser } from './handlers/user';

export function* watcherSaga(){
    yield takeLatest(SET_USERS,handleGetUser);
    yield takeLatest(SET_POST,handlePost)
}