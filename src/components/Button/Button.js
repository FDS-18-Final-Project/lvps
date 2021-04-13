import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { string, bool, oneOf, oneOfType, array, number } from 'prop-types';
import { colors, calcRem, calcInterval } from 'theme/theme';
import { motion } from 'framer-motion';

const modeStyle = {
  primary: {
    color: colors.white,
    'background-color': colors.redMain,
    border: `4px solid ${colors.redMain}`
  },
  secondary: {
    color: colors.black,
    'background-color': colors.white,
    border: `4px solid ${colors.redMain}`
  },
  hoverBoxTheme: {
    color: colors.white,
    'background-color': colors.black
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
    'background-color': colors.black
  }
};

const styleIcon = {
  secondary: {
    fill: `${colors.redMain}`
  },
  primary: {
    fill: `${colors.white}`
  }
};

const styleHoverIcon = {
  secondary: {
    fill: `${colors.white}`
  },
  primary: {
    fill: `${colors.redMain}`
  }
};

const disabledStyle = {
  cursor: 'not-allowed',
  opacity: '0.5'
};

// 버튼 스타일링 (모바일 디자인 필요)
const changeStringToArray = value => value.split(' ');

const compDesign = css`
  display: flex;
  box-sizing: border-box;
  width: ${({ width, fullwidth }) => (!fullwidth ? calcRem(width) : '100%')};
  height: ${({ height }) => calcRem(height)};
  margin: ${({ margin }) => calcInterval(changeStringToArray(margin))};
  padding: ${({ padding }) => calcInterval(changeStringToArray(padding))};
  font-size: ${({ fontSize }) => calcRem(fontSize)};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-family: inherit;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${({ styledmode }) => modeStyle[styledmode]};
  ${({ disabled }) => disabled && { ...disabledStyle }};

  &:focus {
    outline: none;
  }

  &:hover {
    ${({ disabled, styledmode }) => !disabled && hoverEffect[styledmode]};

    path {
      ${props => styleHoverIcon[props.styledmode]};
    }
  }

  & div {
    width: ${calcRem(20)};
    height: ${calcRem(20)};
    margin: ${calcRem(0)};
    margin-left: ${calcRem(20)};

    svg {
      width: 100%;
      height: 100%;
      margin: 0;
    }
    path {
      ${props => styleIcon[props.styledmode]};
    }
  }
`;

const StyledButton = styled.button`
  ${compDesign}
`;

const StyledLinkA = styled(motion(Link))`
  ${compDesign}
`;

const modeComponent = {
  button: StyledButton,
  link: StyledLinkA
};

// 버튼 컴포넌트
const Button = ({ mode, to, disabled, children, ...restProps }) => {
  const Comp = modeComponent[mode];
  const selectedProp = mode === 'button' ? { disabled: disabled } : { to: to };
  console.log({ ...restProps });
  console.log(mode, to, disabled, children);
  return (
    <Comp {...restProps} {...selectedProp}>
      {children}
    </Comp>
  );
};

Button.propTypes = {
  mode: oneOf(['button', 'link']).isRequired,
  styledmode: string,
  type: string,
  disabled: bool,
  fullwidth: bool,
  role: string,
  to: string,
  children: oneOfType([array, string]),
  width: number,
  height: number,
  fontSize: number,
  margin: string,
  padding: string,
  fontWeight: number
};

Button.defaultProps = {
  mode: 'button',
  styledmode: 'primary',
  type: 'button',
  disabled: false,
  fullwidth: false,
  role: 'button',
  to: '/',
  children: 'Button',
  width: 200,
  height: 50,
  fontSize: 15,
  padding: '11.5 20',
  margin: '0',
  fontWeight: 700
};

Button.displayName = 'Button';

export default Button;
