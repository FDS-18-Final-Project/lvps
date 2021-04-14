import React from 'react';
import { NavLink } from 'react-router-dom';
import { oneOf } from 'prop-types';
import styled from 'styled-components';
import { calcRem, fontSizes, calcInterval } from 'theme/theme';
import { motion } from 'framer-motion';

const NavbarContainer = styled(motion.ul)`
  width: 100%;
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  font-size: ${fontSizes.base};

  a {
    display: inline-block;
    padding: ${calcRem(32)} 0;
    transition: 0.4s;
    color: inherit;
    white-space: nowrap;

    &:hover {
      color: rgba(235, 21, 39, 0.8);
    }
  }

  li {
    //margin: ${calcInterval([0, 20])};
  }

  .active {
    color: rgba(235, 21, 39, 0.8);
  }
`;

const Navbar = ({ ...restProps }) => {
  return (
    <NavbarContainer {...restProps}>
      <li>
        <NavLink to="/home">HOME</NavLink>
      </li>
      <li>
        <NavLink to="/about">ABOUT</NavLink>
      </li>
      <li>
        <NavLink to="/services">SERVICES</NavLink>
      </li>
      <li>
        <NavLink to="/get-a-queue">GET A QUOUE</NavLink>
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
