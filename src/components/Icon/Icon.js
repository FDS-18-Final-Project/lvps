import React from 'react';
import { Link } from 'react-router-dom';
import { string, object, bool } from 'prop-types';
import styled from 'styled-components';
import { colors } from 'theme/theme';
import { motion } from 'framer-motion';
import svg from 'assets';

const StyledIconContainer = styled(motion.div)`
  display: flex;
  align-items: center;

  path {
    fill: ${({ color }) => color && colors[color]};
    /* stroke: ${({ stroke }) => stroke}; */
  }
`;

const StyledIconButton = styled.button`
  padding: 0;
  border: 0;
  outline: none;
  background: transparent;
  cursor: pointer;
`;

const Icon = ({
  type,
  color,
  // stroke,
  motionProps,
  button,
  link,
  to,
  stylesForContainer,
  className,
  children,
  ...restProps
}) => {
  let Comp = null;

  if (link)
    Comp = (
      <Link to={to}>{React.createElement(svg[type], { ...restProps })}</Link>
    );
  else if (button)
    Comp = (
      <StyledIconButton>
        {React.createElement(svg[type], { ...restProps })}
      </StyledIconButton>
    );
  else Comp = React.createElement(svg[type], { ...restProps });
  return (
    <StyledIconContainer
      color={color}
      // stroke={stroke}
      className={className}
      {...motionProps}
      {...stylesForContainer}
    >
      {Comp}
      {children}
    </StyledIconContainer>
  );
};

Icon.propTypes = {
  /** 아이콘 타입 */
  type: string.isRequired,
  /** 아이콘 색 */
  color: string,
  /** 아이콘 스트로크 */
  // stroke: string,
  /** 아이콘 모션 객체 */
  motionProps: object,
  /** 아이콘 컨테이너 스타일 객체 */
  stylesForContainer: object,
  /** 버튼 여부 */
  button: bool,
  /** 링크 여부 */
  link: bool,
  /** 링크 href */
  to: string
};

Icon.defaultProps = {
  type: 'rightArrow',
  color: '',
  // stroke: '',
  button: false,
  link: false
};

StyledIconContainer.displayName = 'StyledIconContainer';
StyledIconButton.displayName = 'StyledIconButton';

export default Icon;
