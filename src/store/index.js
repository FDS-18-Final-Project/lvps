import { combineReducers } from 'redux';
import formReducer from './form/form';
import posts from './posts/posts_reducer';
import serviceReducer from './service/service';
import ceramicReducer from './modal/ceramic';
import detailModalReducer from './modal/detail';
import ppfModalReducer from './modal/ppf';
import widowModalReducer from './modal/window';

const appReducers = combineReducers({
  windowModal: widowModalReducer,
  ppfModal: ppfModalReducer,
  ceramicModal: ceramicReducer,
  detailModal: detailModalReducer,
  service: serviceReducer,
  formState: formReducer,
  posts
});

export default appReducers;
