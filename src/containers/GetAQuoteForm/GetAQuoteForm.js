import { A11yHidden, Button, Icon, Input } from 'components/';
import { useFormik } from 'formik';
import { Layout } from 'pages';
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateForm } from 'store/form/form';
import styled from 'styled-components';
import { calcInterval, calcRem, colors, fontSizes } from '../../theme/theme';
import { validationSchema } from '../../utils/validation';

const FormContainer = styled.form`
  max-width: ${calcRem(984)};
  box-sizing: border-box;
  padding: ${calcInterval([130, 95, 76])};
  background-color: ${colors.black};
  margin: 0 auto;
  border: 2px solid ${colors.lightGray};
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
    border: none;
    border-bottom: 2px solid ${colors.lightGray};
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
  }
`;

const GetAQuoteForm = () => {
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
    }
  });
  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <StyledFieldset>
        <A11yHidden as="legend">GetAQuote Form</A11yHidden>
        <Input label="FULL NAME *" name="name" id="name" formik={formik}>
          YOUR FULL NAME(At least 2 characters)
        </Input>
        <Input label="E-MAIL *" name="email" id="email" formik={formik}>
          YOUR MAIL ADDRESS
        </Input>
        <Input
          label="PHONE NUMBER *"
          name="phoneNumber"
          id="phoneNumber"
          formik={formik}
        >
          YOUR PHONE NUMBER(At least 10 numbers)
        </Input>
        <Layout.FlexContainer className="yearMakeContainer">
          <Input label="YEAR *" name="year" id="year" formik={formik}>
            4 NUMBERS (e.x 1990)
          </Input>
          <Input label="MAKE *" name="make" id="make" formik={formik} />
        </Layout.FlexContainer>
        <Input label="MODEL *" name="model" id="model" formik={formik} />
        <Layout.FlexContainer alignItems="flex-start">
          <label htmlFor="message">MESSAGE(Option)</label>
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
          Send Message <Icon type="rightArrow" color={colors.white} />
        </Button>
      </StyledFieldset>
    </FormContainer>
  );
};

export default GetAQuoteForm;
