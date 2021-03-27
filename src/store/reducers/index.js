import { combineReducers } from 'redux';
import posts from './posts_reducer';

const appReducers = combineReducers({ posts });

export default appReducers;
