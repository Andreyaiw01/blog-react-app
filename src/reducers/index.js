import { combineReducers } from 'redux';
import PostReducer from './posts-reducers';

const rootReducer = combineReducers( {
  PostReducer,
} );

export default rootReducer;