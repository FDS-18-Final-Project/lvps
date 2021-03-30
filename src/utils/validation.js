let uuid;

export const getId = () => {
  return uuid || Date.now().toString(32);
};

export const validate = element => {
  let error = [true, ''];

  let valid = undefined;
  if (element.validation.required) {
    valid = element.value.trim() !== '';
    const message = valid ? '' : 'This field is required.';
    error = !valid ? [false, message] : error;
  }

  // for maxLength
  if (valid && element.validation.maxLength) {
    const { maxLength } = element.validation;
    valid = element.value.trim().length <= maxLength;
    const message = `${!valid ? `I am sorry, the maximum length is ${maxLength}` : ''}`;
    error = !valid ? [valid, message] : error;
  }

  // for minLength
  if (valid && element.validation.minLength) {
    const { minLength } = element.validation;
    valid = element.value.trim().length >= minLength;
    const message = `${!valid ? `I am sorry, the minimum length is ${minLength}` : ''}`;
    error = !valid ? [valid, message] : error;
  }

  return error;
};
