import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { oneOf } from 'prop-types';
import styled from 'styled-components';
import { calcRem, fontSizes } from 'theme/theme';
import { AnimatePresence, motion } from 'framer-motion';
import HoverBox from 'components/HoverBox/HoverBox';

const NavbarContainer = styled(motion.ul)`
  width: 100%;
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  font-size: ${fontSizes.lg};
  font-weight: bold;

  a {
    display: flex;
    transition: 0.4s;
    color: inherit;
    white-space: nowrap;
    padding: 37px ${calcRem(10)};
    &:hover {
      color: rgba(235, 21, 39, 0.8);
    }
  }

  .active {
    color: rgba(235, 21, 39, 0.8);
  }

  .serviceLink .hoverbox {
    top: 100px;
    transition: 0.2s;
    a {
      padding: 0 30px;
    }
  }
`;

const Navbar = ({ ...restProps }) => {
  const [isHover, setHover] = useState(false);

  const handleFocus = () => {
    setHover(true);
  };

  const handleBlur = () => {
    setHover(false);
  };
  console.log(isHover);

  return (
    <NavbarContainer {...restProps}>
      <li>
        <NavLink to="/" exact>
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink to="/about-us">ABOUT</NavLink>
      </li>
      <li
        className="serviceLink"
        onMouseEnter={handleFocus}
        onMouseLeave={handleBlur}
      >
        <NavLink to="/main-service">SERVICES</NavLink>
        <AnimatePresence>
          {isHover && (
            <HoverBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="hoverbox"
            />
          )}
        </AnimatePresence>
      </li>
      <li>
        <NavLink to="/get-a-quote">GET A QUOTE</NavLink>
      </li>
      <li>
        <NavLink to="/faq">FAQ</NavLink>
      </li>
      <li>
        <NavLink to="/contact-us">CONTACT US</NavLink>
      </li>
    </NavbarContainer>
  );
};

Navbar.propTypes = {
  direction: oneOf(['row', 'column']),
  justifyContent: oneOf([
    'center',
    'space-between',
    'space-around',
    'flex-start',
    'flex-end'
  ]),
  alignItems: oneOf([
    'center',
    'space-between',
    'space-around',
    'flex-start',
    'flex-end'
  ])
};

Navbar.defaultProps = {
  direction: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
};

Navbar.displayName = 'NavbarContainer';

export default Navbar;
