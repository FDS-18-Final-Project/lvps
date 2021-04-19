const createModalAction = (single, multi, reset) => {
  const singleToggleAction = (id, name) => ({ type: single, id, name });
  const multiToggleAction = (id, name) => ({ type: multi, id, name });
  const resetState = () => ({ type: reset });
  return [singleToggleAction, multiToggleAction, resetState];
};

export default createModalAction;
