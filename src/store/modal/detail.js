import createModalAction from '../../utils/createModalAction';
import createModalReducer from '../../utils/createModalReducer';
import { detailAndPaintCorrectionData } from 'data/Data';

const SINGLE_TOGGLE_ACTIVE = 'detail/SINGLE_TOGGLE_ACTIVE';
const MULTI_TOGGLE_ACTIVE = 'detail/MULTI_TOGGLE_ACTIVE';
const RESET = 'detail/RESET';

export const [
  detailSingleToggleActive,
  detailMultiToggleActive,
  detailReset
] = createModalAction(SINGLE_TOGGLE_ACTIVE, MULTI_TOGGLE_ACTIVE, RESET);

const detailModalReducer = createModalReducer(
  'detail',
  detailAndPaintCorrectionData
);

export default detailModalReducer;
