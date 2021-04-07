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
    if (props.disabled && props.mode === 'primary') {
      return css`
        color: #d4e0ed;
        background: #97aabd;
        cursor: not-allowed;
      `;
    }
    if (props.disabled && props.mode === 'secondary') {
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
    switch (props.mode) {
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
  display: ${props => props.display || 'block'};
  width: ${props => props.width || '200px'};
  height: ${props => props.height || '50px'};
  border: ${props => props.border || 0};
  border-radius: ${props => props.borderRadius || '5px'};
  margin: ${props => props.margin || 0};
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.3);

  ${typeStyle}
  ${disabledStyle};
  ${fullWidthStyle};
`;

const Button = ({ type, mode, disabled, children, ariaLabel, ...restProps }) => {
  return (
    <StyledButton type={type} mode={mode} disabled={disabled} aria-label={ariaLabel} {...restProps}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  mode: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.string,
  ariaLabel: PropTypes.string
};

Button.defaultProps = {
  type: 'button',
  mode: 'primary',
  disabled: false,
  children: '버튼',
  ariaLabel: ''
};

Button.displayName = 'Button';

export default Button;
