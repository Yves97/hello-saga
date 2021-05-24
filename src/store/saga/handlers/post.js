import {call,put} from 'redux-saga/effects'
import {getSinglePost} from '../../../services/posts/post'
import { setPost } from '../../actions/post'

export function* handlePost(){
    try{
        const response = yield getSinglePost(1)
        console.log('response',response)
        yield put(setPost(response))

    }
    catch(error){
        console.log('e',error)
    }
}

