import { combineReducers } from 'redux';
import posts from './posts/posts_reducer';

const appReducers = combineReducers({
  posts
});

export default appReducers;
