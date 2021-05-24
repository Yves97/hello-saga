import {getPost} from '../../config/api/auth'

export const getSinglePost = async (id) => {
    const options =  {method : 'post'}
    const response = await fetch(getPost(id),options)
    const data = response.json()
    return data
}