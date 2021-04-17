import { combineReducers } from 'redux';
import formReducer from './form/form';
import posts from './posts/posts_reducer';

const appReducers = combineReducers({
  formState: formReducer,
  posts
});

export default appReducers;
