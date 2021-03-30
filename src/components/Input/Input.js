import React from 'react';
import styled from 'styled-components';

const InputStyled = styled.input``;

const Error = styled.div`
  color: red;
`;

const Input = ({ formData, change, id }) => {
  const renderError = () => {
    let errorMessage = null;

    if (formData.validation.required && !formData.isValid) {
      errorMessage = <Error>{formData.message}</Error>;
    }

    return errorMessage;
  };

  const renderInput = () => {
    switch (formData.element) {
      case 'input':
        return (
          <>
            <InputStyled />
            {renderError()}
          </>
        );
      case 'textarea':
        return null;
      case 'select':
        return null;
      default:
    }
  };

  return renderInput();
};

export default Input;
