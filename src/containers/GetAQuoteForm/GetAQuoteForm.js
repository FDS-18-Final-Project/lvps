import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  calcInterval,
  calcRem,
  colors,
  device,
  fontSizes
} from '../../theme/theme';
import { useFormik } from 'formik';
import Layout from 'pages/Layout/Layout';
import { updateForm } from 'store/form/form';
import { validationSchema } from '../../utils/validation';
import A11yHidden from 'components/A11yHidden/A11yHidden.styled';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import Icon from 'components/Icon/Icon';

const FullContainer = styled.section`
  position: relative;
  background-color: rgba(45, 45, 45, 0.8);

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-image: url('assets/GetAQuoteBgImage.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition: 0.3s;
  }
`;

const FormContainer = styled.div`
  padding: ${calcInterval([40, 50])};

  ${device.mobile} {
    padding: ${calcInterval([40, 15])};
  }
`;

const StyledForm = styled.form`
  max-width: ${calcRem(984)};
  box-sizing: border-box;
  padding: ${calcInterval([130, 95, 76])};
  background-color: ${colors.black};
  margin: 0 auto;
  border: 2px solid ${colors.lightGray};

  ${device.desktop} {
    padding: ${calcInterval([50, 50])};
  }

  ${device.tablet} {
    padding: ${calcInterval([40, 20])};
  }
`;

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .yearMakeContainer {
    div + div {
      margin-left: ${calcRem(80)};
    }
  }

  .submitBtn {
    align-self: center;
    margin-top: ${calcRem(100)};
  }
  div {
    justify-content: space-between;
  }

  label {
    justify-content: flex-start;
    font-size: ${fontSizes.small};
    font-weight: bold;
    color: ${colors.white};
    flex: 0.3;
  }

  input {
    padding-left: ${calcRem(20)};
    flex: 0.8;
    background-color: transparent;
    height: ${calcRem(36)};
    color: ${colors.white};
  }

  & > div + div {
    margin-top: ${calcRem(85)};
  }

  span {
    color: red;
    position: absolute;
    bottom: -30px;
    left: 27%;
    display: flex;
    align-items: center;

    & > div {
      margin-right: ${calcRem(10)};
    }
  }

  textarea {
    width: 73%;
  }
  ${device.tablet} {
    & > div {
      flex-direction: column;
      align-items: flex-start;
    }

    & > div + div {
      margin-top: ${calcRem(45)};
    }
    label {
      margin-bottom: ${calcRem(20)};
    }
    input {
      padding: 0;
      font-size: ${calcRem(13)};
    }
    span {
      font-size: ${calcRem(12)};
      left: 0;
      bottom: -20px;
      white-space: nowrap;
    }

    .yearMakeContainer {
      div {
        flex-direction: column;
        align-items: flex-start;
      }
      div + div {
        margin-left: 0;
        margin-top: ${calcRem(45)};
      }
    }

    textarea {
      width: 100%;
    }
  }
`;

const postForm = async values => {
  try {
    const URL =
      'http://ec2-3-36-241-163.ap-northeast-2.compute.amazonaws.com:8080/quotations';
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    });
    const resId = await response.json();
    return resId.id;
  } catch (error) {
    throw new Error(error.message);
  }
};

const sendId = async id => {
  const URL = `http://ec2-3-36-241-163.ap-northeast-2.compute.amazonaws.com:8080/quotations/${id}/send-mails`;
  await fetch(URL);
};

const sendMail = async (values, services) => {
  try {
    const id = await postForm({
      ...values,
      services: CreateServiceForm(services)
    });
    sendId(id);
  } catch (error) {
    throw new Error(error.message);
  }
};

const CreateServiceForm = services => {
  let servicesInfo = '';

  for (const [key, value] of Object.entries(services)) {
    servicesInfo += `\n- service name: ${key}`;
    for (let i = 0; i < value.length; i++) {
      if (key === 'wheelAndTire') {
        servicesInfo += `\n(option: ${value[i].value})`;
      } else {
        servicesInfo += `\n(option: ${value[i].name}, price: ${value[i].price})`;
      }
    }
    servicesInfo += '\n';
  }

  return servicesInfo;
};

const GetAQuoteForm = () => {
  const services = useSelector(state => state.service);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phoneNumber: '',
      model: '',
      year: '',
      make: '',
      message: ''
    },
    validationSchema,
    onSubmit: values => {
      dispatch(updateForm(values));
      sendMail(values, services);
    }
  });
  return (
    <FullContainer>
      <FormContainer>
        <StyledForm onSubmit={formik.handleSubmit}>
          <StyledFieldset>
            <A11yHidden as="legend">GetAQuote Form</A11yHidden>
            <Input label="FULL NAME *" name="name" id="name" formik={formik}>
              YOUR FULL NAME (At least 2 characters)
            </Input>
            <Input label="E-MAIL *" name="email" id="email" formik={formik}>
              YOUR E-MAIL ADDRESS
            </Input>
            <Input
              label="PHONE NUMBER *"
              name="phoneNumber"
              id="phoneNumber"
              formik={formik}
            >
              YOUR PHONE NUMBER (xxx-xxx-xxxx)
            </Input>
            <Layout.FlexContainer className="yearMakeContainer">
              <Input label="YEAR *" name="year" id="year" formik={formik}>
                4 NUMBERS (e.x 1990)
              </Input>
              <Input label="MAKE *" name="make" id="make" formik={formik}>
                {' '}
              </Input>
            </Layout.FlexContainer>
            <Input label="MODEL *" name="model" id="model" formik={formik}>
              {' '}
            </Input>
            <Layout.FlexContainer alignItems="flex-start">
              <label htmlFor="message">MESSAGE (Optional)</label>
              <textarea
                name="message"
                id="message"
                cols="83"
                rows="20"
                {...formik.getFieldProps('message')}
              />
            </Layout.FlexContainer>
            <Button
              className="submitBtn"
              type="submit"
              disabled={!(formik.isValid && formik.dirty)}
            >
              Send Message{' '}
              <Icon
                title="right arrow"
                type="rightArrow"
                color={colors.white}
              />
            </Button>
          </StyledFieldset>
        </StyledForm>
      </FormContainer>
    </FullContainer>
  );
};

export default GetAQuoteForm;
