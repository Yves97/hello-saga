import * as actionTypes from '../actionTypes'


export const setFirstname = (value) => ({type : actionTypes.SET_FIRSTNAME,value})
export const setLastname = (value) => ({type : actionTypes.SET_LASTNAME,value})
export const setUsers = (users) => ({type :actionTypes.SET_USERS,users})    