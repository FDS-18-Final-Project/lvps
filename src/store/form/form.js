const UPDATE_FORM = 'form/UPDATE_FORM';

export const updateForm = values => ({ type: UPDATE_FORM, payload: values });

const initialState = {};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      return action.payload;
    default:
      return state;
  }
};

export default formReducer;
