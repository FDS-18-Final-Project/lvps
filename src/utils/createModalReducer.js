const createModalReducer = (type, modalState) => {
  const [SINGLE_TOGGLE_ACTIVE, MULTI_TOGGLE_ACTIVE, RESET] = [
    `${type}/SINGLE_TOGGLE_ACTIVE`,
    `${type}/MULTI_TOGGLE_ACTIVE`,
    `${type}/RESET`
  ];

  return (state = modalState, action) => {
    switch (action.type) {
      case SINGLE_TOGGLE_ACTIVE:
        return {
          ...state,
          [action.name]: {
            ...state[action.name],
            contents: state[action.name].contents.map(content =>
              content.id === +action.id
                ? { ...content, active: true }
                : { ...content, active: false }
            )
          }
        };
      case MULTI_TOGGLE_ACTIVE:
        return {
          ...state,
          [action.name]: {
            ...state[action.name],
            contents: state[action.name].contents.map(content =>
              content.id === +action.id
                ? { ...content, active: !content.active }
                : content
            )
          }
        };
      case RESET:
        return modalState;
      default:
        return state;
    }
  };
};

export default createModalReducer;
