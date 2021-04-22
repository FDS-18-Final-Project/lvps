import * as Yup from 'yup';
import Icon from '../components/Icon/Icon';

export const validationSchema = Yup.object({
  name: Yup.string()
    .min(
      2,
      <>
        <Icon title="alert" type="alert" />
        Please input your name at least 2 letters
      </>
    )
    .required(
      <>
        <Icon title="alert" type="alert" />
        'Please input your name'
      </>
    ),
  phoneNumber: Yup.string()
    .typeError(
      <>
        <Icon title="alert" type="alert" />
        'Please input your mobile number with numbers'
      </>
    )
    .matches(
      /^\d{3}[-.]?\d{3}[-.]?\d{4}$/,
      <>
        <Icon title="alert" type="alert" />
        'Please follow the format(ex: 012-345-6789)'
      </>
    )
    .required(
      <>
        <Icon title="alert" type="alert" />
        'Please input your mobile number'
      </>
    ),
  email: Yup.string()
    .email(
      <>
        <Icon title="alert" type="alert" />
        'Please input a valid email
      </>
    )
    .required(
      <>
        <Icon title="alert" type="alert" />
        'Please input your email'
      </>
    ),
  model: Yup.string().required(
    <>
      <Icon title="alert" type="alert" />
      'Please input the model of your vehicle'
    </>
  ),
  make: Yup.string().required(
    <>
      <Icon title="alert" type="alert" />
      'Please input the make of your vehicle'
    </>
  ),
  year: Yup.number()
    .typeError(
      <>
        <Icon title="alert" type="alert" />
        'Please input only numbers'
      </>
    )
    .required(
      <>
        <Icon title="alert" type="alert" />
        'Please input the year of your vehicle'
      </>
    )
});
