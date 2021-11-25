import axios from "axios"
import {
  FETCH_POSTS,
  FETCH_USER,
  FETCH_THEME,
  FETCH_LANGUAGE,
  FETCH_TOPIC,
  FETCH_USERS,
  UPDATE_STATE,
  SET_POSTS,
  SET_USER,
  ADD_LIKE,
  REMOVE_LIKE,
  ADD_COMMENT
} from "../constants/type";
export const fetchPosts = () => async (dispatch) => {
  axios({
    method: "get",
    withCredentials: true,
    url: "/getPosts",
  }).then((res) =>{
    if(res.status===200){
      let action = { type: FETCH_POSTS, data: res.data };
      dispatch(action);
    }
  })
 
 
};
export const addComment = (data) => async (dispatch) => {

  axios({
    method: "post",
    withCredentials: true,
    data:data,
    url: "/addComment",
  }).then((res) =>{
    if(res.status===200){
      let action = { type: ADD_COMMENT, data: res.data };
      dispatch(action);
    }
  })
 
 
};
export const setUser = (user) => async (dispatch) => {
  let action = { type: SET_USER, data: user };
  dispatch(action);
};
export const addLike  = (data) => async (dispatch) => {
 
  axios({
    method: "post",
    withCredentials: true,
    data:data,
    url: "/addLike",
  }).then((res) =>{
 
    if(res.status===200){
      let action = { type: ADD_LIKE, data: res.data };
      dispatch(action);
    }
  })}

 export const removeLike  = (post) => async (dispatch) => {
  axios({
    method: "post",
    withCredentials: true,
    data:post,
    url: "/removeLike",
  }).then((res) =>{
    if(res.status===200){
      let action = { type: REMOVE_LIKE, data: res.data };
      dispatch(action);
    }
  })}
  
 
export const fetchTheme = (theme) => async (dispatch) => {
  let action = { type: FETCH_THEME, data: theme };
  dispatch(action);
};
export const setPosts = (posts) => async (dispatch) => {
  let action = { type: SET_POSTS, data: posts };
  dispatch(action);
};
export const updateState = () => async (dispatch) => {
  let action = { type: UPDATE_STATE, data: 1 };
  dispatch(action);
};
export const fetchTopic = (topics) => async (dispatch) => {
  axios({
    method: "get",
    withCredentials: true,
    url: "/getTopics",
  }).then((res) =>{
    if(res.status===200){
      let action = { type: FETCH_TOPIC, data: res.data };
  dispatch(action);
    }
  })

};
export const fetchLanguage = (language) => async (dispatch) => {
  let response = await fetch("/staticContent.json");
  response = await response.json();
  let result;

  if (language === "hindi") {
    result = response.hindi;
  } else {
    result = response.es;
  }
  
  let action = { type: FETCH_LANGUAGE, data: result };
  dispatch(action);
};
export const fetchUser = () => async (dispatch) => {
  axios({
    method: "get",
    withCredentials: true,
    url: "/getUser",
  }).then((res) =>{
    
    if(res.status===200){
      let action = { type: FETCH_USER, data: res.data };
      dispatch(action);
    }
    else{
      let action = { type: FETCH_USER, data: 'log in' };
      dispatch(action);
    }
  })
  
};
export const fetchUsers = (users) => async (dispatch) => {
  axios({
    method: "get",
    withCredentials: true,
    url: "/getUsers",
  }).then((res) =>{
    
    if(res.status===200){
      let action = { type: FETCH_USERS, data: res.data };
      dispatch(action);
    }
  })
 
};
