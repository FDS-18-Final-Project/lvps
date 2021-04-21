import * as Yup from 'yup';
import Icon from '../components/Icon/Icon';

export const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, [
      <Icon type="alert" />,
      'Please input your name with longer than 2 characters'
    ])
    .required('Please input your name'),
  phoneNumber: Yup.string()
    .typeError('Please input your mobile number with numbers')
    .matches(
      /^\d{3}[-.]?\d{3}[-.]?\d{4}$/,
      'Please follow the format(ex: 012-345-6789)'
    )
    .required('Please input your mobile number'),
  email: Yup.string()
    .email('Please input a valid email')
    .required('Please input your email'),
  model: Yup.string().required('Please input the model of your vehicle'),
  make: Yup.string().required('Please input the make of your vehicle'),
  year: Yup.number()
    .typeError('Please input a value with numbers')
    .required('Please input the year of your vehicle')
});
