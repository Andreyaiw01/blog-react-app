import * as types from '../constants/actionsTypes';

const INITIAL_STATE = {
  posts: [],
  post: {}
};

const PostsReducer = ( state = INITIAL_STATE, action ) => {
  switch( action.type )
  {
    case types.PUSH_POSTS:
      return { ...state, posts: action.payload };

    case types.PUSH_POST:
      return { ...state, post: action.payload };

    default:
      return state;
  }
}

export default PostsReducer;