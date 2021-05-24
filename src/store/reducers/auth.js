import * as actionTypes from '../actionTypes'



const initialState = {
    lastname : "",
    firstname : "",
    users : []
}

const authReducer = (state = initialState,action) => {

    switch (action){
        case actionTypes.SET_LASTNAME:
            return {
                ...state,lastname : action.value
            }
        case actionTypes.SET_FIRSTNAME:
            return{
                ...state,firstname : action.value
            }
        case actionTypes.SET_USERS:
            return {
                ...state,users : action.users
            }
        default:
            return state
    }
}

export default authReducer