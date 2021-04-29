import createModalAction from '../../utils/createModalAction';
import createModalReducer from '../../utils/createModalReducer';
import { ppfData } from 'data/Data';

const SINGLE_TOGGLE_ACTIVE = 'ppf/SINGLE_TOGGLE_ACTIVE';
const MULTI_TOGGLE_ACTIVE = 'ppf/MULTI_TOGGLE_ACTIVE';
const RESET = 'ppf/RESET';

export const [
  ppfSingleToggleActive,
  ppfMultiToggleActive,
  ppfReset
] = createModalAction(SINGLE_TOGGLE_ACTIVE, MULTI_TOGGLE_ACTIVE, RESET);

const ppfReducer = createModalReducer('ppf', ppfData);

export default ppfReducer;
