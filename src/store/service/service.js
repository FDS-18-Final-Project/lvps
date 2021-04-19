const ADD_SERVICE = 'service/ADD_SERVICE';

export const addService = (payload, key) => ({
  type: ADD_SERVICE,
  payload,
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
    default:
      return state;
  }
};

export default serviceReducer;
