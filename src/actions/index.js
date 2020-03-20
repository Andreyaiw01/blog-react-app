import * as types from '../constants/actionsTypes';

export const pushPosts = (masPosts) => {
  return {
    type: types.PUSH_POSTS,
    payload: masPosts 
  }
}

export const pushPost = (dataPost) => {
  return {
    type: types.PUSH_POST,
    payload: dataPost 
  }
}
