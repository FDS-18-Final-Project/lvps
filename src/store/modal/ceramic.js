import createModalReducer from '../../utils/createModalReducer';
import createModalAction from '../../utils/createModalAction';
import { ceramicProData } from 'data/Data';

const SINGLE_TOGGLE_ACTIVE = 'ceramic/SINGLE_TOGGLE_ACTIVE';
const MULTI_TOGGLE_ACTIVE = 'ceramic/MULTI_TOGGLE_ACTIVE';
const RESET = 'ceramic/RESET';

export const [
  ceramicSingleToggleActive,
  ceramicMultiToggleActive,
  ceramicReset
] = createModalAction(SINGLE_TOGGLE_ACTIVE, MULTI_TOGGLE_ACTIVE, RESET);

const ceramicReducer = createModalReducer('ceramic', ceramicProData);

export default ceramicReducer;
