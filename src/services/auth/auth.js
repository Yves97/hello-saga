import {getUsers} from '../../config/api/auth'

export const getAllUsers = async () => {
    const options = {method : 'get'}
    const response = await fetch(getUsers(),options)
    const data = response.json()
    return data
}