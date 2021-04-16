import React from 'react';
import styled from 'styled-components';
import { fontSizes } from 'theme/theme';
import { string } from 'prop-types';

const CheckBoxContainer = styled.label`
  display: inline-block;
  border: 1px solid lightgray;
  position: relative;
  border: 4px solid #c9c9c9;

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 230px;
    background-color: black;
    background-image: url(${({ imagePath }) => imagePath});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  &::after {
    content: '${({ label }) => label}';
    width: 100%;
    position: absolute;
    text-align: center;
    font-size: ${fontSizes.lg};
    font-weight: bold;
    bottom: 17.2%;
    right: 50%;
    transform: translateX(50%);
  }

  input {
    width: 300px;
    height: 380px;
    opacity: 0;
  }
`;

const CheckBox = ({ imagePath, label }) => {
  return (
    <CheckBoxContainer imagePath={imagePath} label={label}>
      <input type="checkbox" />
    </CheckBoxContainer>
  );
};

CheckBox.propTypes = {
  imagePath: string,
  label: string
};

CheckBox.defaultProps = {
  imagePath: 'assets/dummyImage.png',
  label: 'CERAMIC COATING'
};

export default CheckBox;
