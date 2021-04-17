import * as Yup from 'yup';

export const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Please input your name with longer than 2 characters')
    .required('This field is required'),
  phoneNumber: Yup.string()
    .typeError('Please input numbers')
    .matches(
      /^\d{3}[-.]?\d{3}[-.]?\d{4}$/,
      'Please follow the format(ex: 012-345-6789)'
    )
    .required('This field is required'),
  email: Yup.string()
    .email('Please input a valid email')
    .required('This field is required'),
  model: Yup.string().required('This field is required'),
  year: Yup.number()
    .typeError('Please input numbers')
    .required('This field is required')
});
