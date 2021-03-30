import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const fullWidthStyle = css`
  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`;

const disabledStyle = css`
  ${props => {
    if (props.disabled && props.type === 'primary') {
      return css`
        color: #d4e0ed;
        background: #97aabd;
        cursor: not-allowed;
      `;
    }
    if (props.disabled && props.type === 'secondary') {
      return css`
        color: #97aabd;
        background: #d4e0ed;
        cursor: not-allowed;
      `;
    }
  }}
`;

const typeStyle = css`
  ${props => {
    switch (props.type) {
      case 'primary':
        return css`
          color: #ffffff;
          background: #0074e9;
        `;
      case 'secondary':
        return css`
          color: #0074e9;
          background: #ffffff;
        `;
      default:
        return css`
          color: #ffffff;
          background: #0074e9;
        `;
    }
  }}
`;
const StyledButton = styled.button`
  width: ${props => props.width || '200px'};
  height: ${props => props.height || '50px'};
  border: ${props => props.border || 0};
  border-radius: ${props => props.borderRadius || '5px'};
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.3);

  ${typeStyle}
  ${disabledStyle};
  ${fullWidthStyle};
`;

const Button = ({ type, disabled, children, ariaLabel, ...restProps }) => {
  return (
    <StyledButton type={type} disabled={disabled} aria-label={ariaLabel} {...restProps}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.string
};

Button.defaultProps = {
  type: 'primary',
  disabled: false,
  children: '버튼'
};

Button.displayName = 'Button';

export default Button;
