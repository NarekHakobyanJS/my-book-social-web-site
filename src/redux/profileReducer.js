import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
let initialState = {
    posts : [
        {id : 1, message : "hello React from Narek", likesCount : "55"},
        {id : 2, message : "props is js objcet", likesCount : "47"},
        {id : 3, message : "it s my first post", likesCount : "78"},
        {id : 4, message : "leran js leran react Redux", likesCount : "889"},
      ],
    newPostText : "Narek Hakobyan",
    profile : null,
    status : "yo"
}

const profileReducer = (state = initialState, action) => {
    
  switch(action.type){
    case ADD_POST: 
      let newPost = {
        id : 5,
        message : state.newPostText,
        likesCount : 0
      }
      return {
        ...state,
        posts : [...state.posts, newPost],
        newPostText : ""
      }
     case UPDATE_NEW_POST_TEXT : 
      return {
        ...state,
        newPostText : action.newText
      }
    case SET_USER_PROFILE : 
      return {
        ...state,
        profile : action.profile
    }
    case SET_STATUS : 
      return {
        ...state,
        status : action.status
    }
    default: 
      return state
  }
}


export const addPostActionCreator = () => ({type : ADD_POST});
export const updateNewPsotTextActionCreator = (text) => ({type : UPDATE_NEW_POST_TEXT, newText : text});
export const setUserProfile = (profile) => ({type : SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type : SET_STATUS, status});

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId)
      dispatch(setStatus(response.data))
    
}

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status)
  if(response.data.resultCode === 0) {
        dispatch(setStatus(status))
      }
    
}

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}
export default profileReducer;