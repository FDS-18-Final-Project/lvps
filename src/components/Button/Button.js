import styled, { css } from 'styled-components';
import { string, bool } from 'prop-types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import theme from 'theme/theme';
import { fullWidthStyle } from 'styles/Mixin';

const { colors, fontSizes, calcRem } = theme;

const modeStyle = {
  primary: {
    color: colors.white,
    'background-color': colors.redMain,
    border: 'none'
  },
  secondary: {
    color: colors.black,
    'background-color': colors.white,
    border: `4px solid ${colors.redMain}`
  }
};

const hoverEffect = {
  primary: {
    color: colors.redMain,
    'background-color': colors.white,
    border: `4px solid ${colors.redMain}`
  },
  secondary: {
    color: colors.white,
    'background-color': colors.redMain
  }
};

const disabledStyle = css`
  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}
`;

// 버튼 스타일링 (모바일 디자인 필요)
const compDesign = css`
  display: flex;
  box-sizing: border-box;
  width: ${props => props.width || '465px'};
  height: ${props => props.height || '96px'};
  margin: ${props => props.margin || calcRem(0)};
  padding: 0 0.8em;
  font-size: ${fontSizes.lg};
  font-weight: ${props => props.fontWeight || 700};
  font-family: inherit;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${props => modeStyle[props.styledMode]}
  ${fullWidthStyle}
  ${disabledStyle}
  &:focus {
    outline: none;
  }

  &:hover {
    ${props => !props.disabled && hoverEffect[props.styledMode]}
  }
`;

const StyledButton = styled.button`
  ${compDesign}
`;

const StyledLinkA = styled(motion(Link))`
  ${compDesign}
`;

// button 컴포넌트
const ButtonComp = ({ type, children, disabled, ...restProps }) => {
  return (
    <StyledButton type={type} disabled={disabled} {...restProps}>
      {children}
    </StyledButton>
  );
};

// link 컴포넌트
const LinkA = ({ role, href, children, ...restProps }) => {
  console.log(restProps);
  return (
    <StyledLinkA role={role} to={href} {...restProps}>
      {children}
    </StyledLinkA>
  );
};

// 버튼 컴포넌트
const Button = ({ mode, ...restProps }) => {
  const Comp = mode === 'button' ? ButtonComp : LinkA;
  return <Comp mode={mode} {...restProps} />;
};

Button.propTypes = {
  mode: string.isRequired,
  styledMode: string,
  type: string,
  disabled: bool,
  fullWidth: bool,
  role: string,
  href: string,
  children: string
};

Button.defaultProps = {
  mode: 'button',
  styledMode: 'primary',
  type: 'button',
  disabled: false,
  fullWidth: false,
  role: 'button',
  href: '/',
  children: 'Button'
};

Button.displayName = 'Button';

export default Button;
