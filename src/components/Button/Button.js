import styled, { css } from 'styled-components';
import { oneOf, bool, string } from 'prop-types';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// 버튼 색상 스타일링
const compColor = css`
  ${props => {
    switch (props.mode) {
      case 'primary':
        return css`
          color: white;
          background-color: rgb(235, 21, 39);
          border: none;
          &:hover {
            color: #eb1527;
            background-color: white;
            border: 4px solid #eb1527;
          }
        `;
      case 'secondary':
        return css`
          color: black;
          background-color: white;
          border: 4px solid #eb1527;
          &:hover {
            color: white;
            background-color: #eb1527;
          }
        `;
      default:
        return css`
          color: white;
          background-color: #eb1527;
          border: none;
        `;
    }
  }}
`;

// 버튼 모양 스타일링 (모바일 디자인 필요)
const compDesign = css`
  display: flex;
  box-sizing: border-box;
  width: 465px;
  height: 96px;
  margin: 0;
  font-size: 36px;
  font-weight: 700;
  font-family: inherit;
  text-decoration: none;
  align-items: center;
  padding-left: 57px;

  &:focus {
    outline: none;
  }
`;

const StyledButton = styled.button`
  ${compColor}
  ${compDesign}
`;

const StyledAnchor = styled(motion(Link))`
  ${compColor}
  ${compDesign}
`;

// button 컴포넌트

const ButtonComp = ({ type, mode, disabled, children, ...restProps }) => {
  return (
    <StyledButton type={type} mode={mode} disabled={disabled} {...restProps}>
      {children}
    </StyledButton>
  );
};

// a 컴포넌트

const LinkA = ({ mode, role, href, children, ...restProps }) => {
  return (
    <StyledAnchor mode={mode} role={role} to={href} {...restProps}>
      {children}
    </StyledAnchor>
  );
};

// 버튼 컴포넌트

const Button = ({ tag, ...restProps }) => {
  const Tag = tag === 'button' ? ButtonComp : LinkA;
  return <Tag {...restProps} />;
};

Button.propTypes = {
  tag: oneOf(['button', 'a']),
  type: string,
  mode: oneOf(['primary', 'secondary']),
  disabled: bool,
  role: string,
  href: string,
};

Button.defaultProps = {
  tag: 'button',
  type: 'button',
  mode: 'primary',
  disabled: false,
  role: 'button',
  href: '/',
  children: 'Button',
};

Button.displayName = 'Button';

export default Button;
