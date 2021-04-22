import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { calcRem, colors, fontSizes } from 'theme/theme';
import { string } from 'prop-types';
import Button from 'components/Button/Button';
import { motion } from 'framer-motion';

const StyledText = styled.p`
  margin-left: ${({ type }) => {
    return type === 'nav'
      ? calcRem(25)
      : type === 'service'
      ? calcRem(50)
      : calcRem(75);
  }};
`;

const StyledButton = styled(Button)`
  /* background-color: ${colors.lightGray}; */
  border: none;
  width: 100%;
  /* color: ${colors.black}; */
  background-color: ${colors.black};
  color: ${colors.white};
  font-size: ${fontSizes.lg};
  justify-content: left;
  &:hover {
    background-color: ${colors.lightGray};
    color: ${colors.black};
    border: none;
  }
`;

const mobileMenuVariants = {
  hidden: {
    x: 300,
    opacity: 0
  },
  visible: { x: 0, opacity: 1, transition: { duration: 0.4 } },
  exit: {
    x: 300,
    opacity: 0,
    transition: { duration: 0.4 }
  }
};

const StyledButtonContainer = styled(motion.li)`
  border-bottom: ${calcRem(1)} solid transparent;
  display: flex;
`;

export const Delay = ({ children, delay }) => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setDone(true), delay);
    return () => clearTimeout(showTimer);
  });

  return done && <>{children}</>;
};

const NavbarMobileItem = ({ value, type, to, idx }) => {
  return (
    <Delay delay={70 * idx}>
      <StyledButtonContainer
        variants={mobileMenuVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <StyledButton mode="link" to={to}>
          <StyledText type={type}>{value}</StyledText>
        </StyledButton>
      </StyledButtonContainer>
    </Delay>
  );
};

NavbarMobileItem.propTypes = {
  value: string,
  type: string,
  to: string
};

NavbarMobileItem.defaultProps = {
  value: 'HOME',
  type: 'nav',
  to: '/'
};

NavbarMobileItem.displayName = 'NavbarMobileItem';
export default NavbarMobileItem;
