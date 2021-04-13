import React from 'react';
import { Link } from 'react-router-dom';
import { string, object, bool } from 'prop-types';
import styled from 'styled-components';
import { calcRem } from 'theme/theme';
import { motion } from 'framer-motion';
import svg from 'assets';
import { Button } from 'components';

const StyledIconContainer = styled(motion.div)`
  display: flex;
  align-items: center;

  svg {
    margin-right: ${calcRem(15)};
  }

  path {
    fill: ${({ color }) => color};
    stroke: ${({ stroke }) => stroke};
  }
`;

const Icon = ({
  type,
  color,
  stroke,
  children,
  motionProps,
  button,
  link,
  to,
  ...restProps
}) => {
  let Comp = null;
  if (link)
    Comp = (
      <Link to={to}>{React.createElement(svg[type], { ...restProps })}</Link>
    );
  else if (button)
    Comp = (
      <Button mode="button">
        {React.createElement(svg[type], { ...restProps })}
      </Button>
    );
  else Comp = React.createElement(svg[type], { ...restProps });

  return (
    <StyledIconContainer color={color} stroke={stroke} {...motionProps}>
      {Comp}
      {children}
    </StyledIconContainer>
  );
};

Icon.propTypes = {
  type: string.isRequired,
  color: string,
  stroke: string,
  motionProps: object,
  button: bool,
  link: bool,
  to: string
};

Icon.defaultProps = {
  type: 'rightArrow',
  color: '',
  stroke: '',
  button: false,
  link: false
};

StyledIconContainer.displayName = 'StyledIconContainer';

export default Icon;
