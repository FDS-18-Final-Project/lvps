import { combineReducers } from 'redux';
import formReducer from './form/form';
import serviceReducer from './service/service';
import ceramicReducer from './modal/ceramic';
import detailModalReducer from './modal/detail';
import ppfModalReducer from './modal/ppf';
import widowModalReducer from './modal/window';
import wheelAndTireReducer from './modal/wheelAndTire';

const appReducers = combineReducers({
  windowModal: widowModalReducer,
  ppfModal: ppfModalReducer,
  ceramicModal: ceramicReducer,
  detailModal: detailModalReducer,
  service: serviceReducer,
  wheelAndTireModal: wheelAndTireReducer,
  formState: formReducer
});

export default appReducers;
