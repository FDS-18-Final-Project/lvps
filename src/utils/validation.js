import * as Yup from 'yup';

export const validationRules = {
  fullname: Yup.string().required('Please input your name'),
  email: Yup.string()
    .email('Email must be a valid email format')
    .required('Please input your email')
    .min(5, 'Please input more than 5 characters for your email'),
  phoneNumber: Yup.number('Please input your phone number with only number')
    .required('Please input your phone number')
    .integer('Please input your phone number with only number')
    .positive(),
  makeAndModel: Yup.string().required('Please input your car make and model'),
  year: Yup.number('Please input the year of your car')
    .required('Please input the year of your car')
    .integer('Please input the year of your car')
    .positive(),
  postalCode: Yup.string().required('Please input your postalcode')
};
