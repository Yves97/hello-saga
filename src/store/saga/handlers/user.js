import {call,put} from 'redux-saga/effects'
import { setUsers } from '../../actions/auth'
import {getAllUsers} from '../../../services/auth/auth'
// import { requestGetUser } from '../requests/user'

export function* handleGetUser(action){
    try{ 
        const response = yield getAllUsers()
        console.log('response',response)
        yield put(setUsers(response))
    }
    catch(error){
        console.log('error',error)
    }
}