import {
  FETCH_POSTS,
  FETCH_THEME,
  FETCH_USER,
  FETCH_LANGUAGE,
  FETCH_TOPIC,
  FETCH_USERS,
  UPDATE_STATE,
  SET_POSTS,
  SET_USER,
  REMOVE_LIKE
  ,ADD_LIKE,
  ADD_COMMENT
} from "../constants/type";

const postReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS: {
      return { ...state, posts: action.data };
    }
    case ADD_COMMENT: {
      return { ...state, comments: action.data };
    }
    case UPDATE_STATE: {
      return { ...state, counter: action.data+1 };
    }
    case SET_USER: {
      return { ...state, user: action.data };
    }
    case REMOVE_LIKE: {
      return { ...state, likes: action.data };
    }
    case ADD_LIKE : {
      return { ...state, likes: action.data };
    }
    case SET_POSTS: {
      return { ...state, posts: action.data };
    }
    case FETCH_USER: {
      return { ...state, user: action.data };
    }
    case FETCH_THEME: {
      return { ...state, theme: action.data };
    }
    case FETCH_LANGUAGE: {
      return { ...state, language: action.data };
    }
    case FETCH_TOPIC: {
      
      return { ...state, topics: action.data };
    }
    case FETCH_USERS: {
      
      return { ...state, users: action.data };
    }
    default: {
      return { ...state };
    }
  }
};
export default postReducer;
