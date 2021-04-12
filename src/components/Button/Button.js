import styled, { css } from 'styled-components';
<<<<<<< Updated upstream
import { string, bool, oneOfType, node } from 'prop-types';
=======
import { string, bool, number } from 'prop-types';
>>>>>>> Stashed changes
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
  },
  hoverBoxTheme: {
    color: colors.white,
    'background-color': colors.black,
    border: `1px solid transparent`
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
  },
  hoverBoxTheme: {
    color: colors.redMain,
    'background-color': colors.black,
    border: `1px solid transparent`
  }
};

const disabledStyle = css`
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}
`;

// 버튼 스타일링 (모바일 디자인 필요)
const compDesign = css`
  display: flex;
  box-sizing: border-box;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: 0 0.8em;
  font-size: ${fontSizes.lg};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-family: inherit;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${({ styledMode }) => modeStyle[styledMode]}
  ${fullWidthStyle}
  ${disabledStyle}
  &:focus {
    outline: none;
  }

  &:hover {
    ${({ disabled, styledMode }) => !disabled && hoverEffect[styledMode]}
  }
`;

const StyledButton = styled(motion.button)`
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
<<<<<<< Updated upstream
  children: oneOfType([string, node])
=======
  children: string,
  width: string,
  height: string,
  margin: string,
  'font-weight': number
>>>>>>> Stashed changes
};

Button.defaultProps = {
  mode: 'button',
  styledMode: 'primary',
  type: 'button',
  disabled: false,
  fullWidth: false,
  role: 'button',
  href: '/',
  children: 'Button',
  width: '465px',
  height: '96px',
  marign: calcRem(0),
  'font-weight': 700
};

Button.displayName = 'Button';

export default Button;
