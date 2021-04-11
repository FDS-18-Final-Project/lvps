import Icon from 'components/Icon/Icon';
import Layout from 'pages/Layout/Layout';
import { node, oneOf, number } from 'prop-types';
import { oneOfType } from 'prop-types';
import { string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import theme from 'theme/theme';

const InputWrapper = styled.div`
  display: flex;

  input {
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    font-size: ${theme.fontSizes.base};
  }
`;

const Input = ({ id, type, label, children, ...restProps }) => {
  return (
    <InputWrapper {...restProps}>
      <Layout.FlexContainer as="label" htmlFor={id}>
        {label}
      </Layout.FlexContainer>
      <input id={id} type={type} placeholder={children} />
    </InputWrapper>
  );
};

Input.propTypes = {
  id: string.isRequired,
  type: oneOf(['text', 'password', 'email', 'number']),
  label: oneOfType([string, node]),
  children: string,
  width: number,
  height: number
};

Input.defaultProps = {
  id: 'searchInput',
  type: 'text',
  label: <Icon type="searchWhite" color="#fff" width="30px" />,
  children: 'Service Search',
  width: 559,
  height: 50
};

InputWrapper.displayName = 'InputWrapper';
export default Input;
