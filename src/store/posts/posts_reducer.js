import { GET_POSTS } from './posts_action';

export default function postsReducer(state = {}, action) {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
