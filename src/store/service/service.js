const ADD_SERVICE = 'service/ADD_SERVICE';
const DELETE_SERVICE = 'service/DELETE_SERVICE';
export const addService = (payload, key) => ({
  type: ADD_SERVICE,
  payload,
  key
});

export const deleteService = key => ({
  type: DELETE_SERVICE,
  key
});

const initialState = {};

const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SERVICE:
      return {
        ...state,
        [action.key]: action.payload
      };
    case DELETE_SERVICE:
      return {
        ...state,
        [action.key]: []
      };
    default:
      return state;
  }
};

export default serviceReducer;
