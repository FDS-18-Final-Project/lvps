import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { string, object, bool } from 'prop-types';
import svg from 'assets';
import { calcRem } from 'theme/theme';
import { Button } from 'components';

const StyledIconBlock = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: ${calcRem(10)};
  /* position: relative; */

  svg {
    margin-right: ${calcRem(15)};
  }

  path {
    fill: ${({ color }) => color};
  }
`;

const Icon = ({
  type,
  color,
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
  if (button)
    Comp = <Button>{React.createElement(svg[type], { ...restProps })}</Button>;
  else Comp = React.createElement(svg[type], { ...restProps });

  return (
    <StyledIconBlock color={color} {...motionProps}>
      {Comp}
      {children}
    </StyledIconBlock>
  );
};

Icon.propTypes = {
  type: string.isRequired,
  color: string,
  motionProps: object,
  button: bool,
  link: bool,
  to: string
};

Icon.defaultProps = {
  type: 'rightArrow',
  color: 'red',
  button: false,
  link: false
};

StyledIconBlock.displayName = 'StyledIconBlock';

export default Icon;
