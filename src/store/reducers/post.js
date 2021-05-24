import * as actionTypes from '../actionTypes'



const initialState = {
    post : ""
}

const postReducer = (state= initialState,action) => {

    switch(action){
        case actionTypes.SET_POST:
            return {
                ...state,post : action.post
            }
    }
}