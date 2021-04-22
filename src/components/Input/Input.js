import React, { forwardRef } from 'react';
import {
  node,
  oneOf,
  number,
  oneOfType,
  string,
  object,
  bool
} from 'prop-types';
import styled from 'styled-components';
import { calcRem, colors, fontSizes } from 'theme/theme';
import Icon from 'components/Icon/Icon';
import Layout from 'pages/Layout/Layout';

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;

  input {
    width: ${({ width }) => (width ? calcRem(width) : '100%')};
    height: ${({ height }) => calcRem(height)};
    font-size: ${fontSizes.lg};
    outline: none;
    border: none;
    border-bottom: ${({ error, touch }) =>
      touch && error
        ? `2px solid ${colors.redMain}`
        : touch && !error
        ? `2px solid ${colors.green}`
        : `2px solid ${colors.lightGray}`};
  }
`;

const Input = forwardRef(
  (
    { id, type, label, name, children, formik, errorMessage, ...restProps },
    ref
  ) => {
    return (
      <InputContainer
        error={formik?.errors[name]}
        touch={formik?.touched[name]}
        {...restProps}
      >
        <Layout.FlexContainer as="label" htmlFor={id}>
          {label}
        </Layout.FlexContainer>
        <input
          id={id}
          type={type}
          placeholder={children}
          name={name}
          ref={ref}
          autoComplete="off"
          {...formik?.getFieldProps(name)}
        />
        {errorMessage && formik.errors[name] && formik.touched[name] && (
          <span>{formik.errors[name]}</span>
        )}
      </InputContainer>
    );
  }
);

Input.propTypes = {
  id: string.isRequired,
  type: oneOf(['text', 'password', 'email', 'number']),
  label: oneOfType([string, node]),
  children: string,
  formik: object,
  name: string,
  errorMessage: bool,
  width: number,
  height: number
};

Input.defaultProps = {
  id: 'searchInput',
  type: 'text',
  label: <Icon type="searchWhite" color={colors.white} width={calcRem(30)} />,
  children: 'Service Search',
  errorMessage: true
};

InputContainer.displayName = 'InputContainer';
export default React.memo(Input);
