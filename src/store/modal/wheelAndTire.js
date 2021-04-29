import { tireList, wheelList } from 'data/Data';

const TOGGLE_ACTIVE = 'wheel/TOGGLE_ACTIVE';
const RESET = 'wheel/RESET';

export const wheelAndTiretoggleActive = (id, name) => ({
  type: TOGGLE_ACTIVE,
  id,
  name
});
export const wheelAndTireReset = () => ({ type: RESET });

const wheelAndTire = {
  tireList,
  wheelList
};

const wheelAndTireReducer = (state = wheelAndTire, action) => {
  switch (action.type) {
    case TOGGLE_ACTIVE:
      return {
        ...state,
        [action.name]: state[action.name].map(item =>
          item.id === action.id ? { ...item, active: !item.active } : item
        )
      };
    case RESET:
      return wheelAndTire;
    default:
      return state;
  }
};

export default wheelAndTireReducer;
