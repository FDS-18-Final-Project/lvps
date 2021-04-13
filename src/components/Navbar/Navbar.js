import { oneOf } from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { calcRem, fontSizes, calcInterval } from 'theme/theme';
import { motion } from 'framer-motion';

const NavbarWrapper = styled(motion.ul)`
  width: 100%;
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
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
    margin: ${calcInterval([0, 20])};
  }

  .active {
    color: rgba(235, 21, 39, 0.8);
  }
`;

const Navbar = ({ ...restProps }) => {
  return (
    <NavbarWrapper {...restProps}>
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
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  direction: oneOf(['row', 'column']),
  justify: oneOf([
    'center',
    'space-between',
    'space-around',
    'flex-start',
    'flex-end'
  ]),
  align: oneOf([
    'center',
    'space-between',
    'space-around',
    'flex-start',
    'flex-end'
  ])
};

Navbar.defaultProps = {
  direction: 'row',
  justify: 'space-between',
  align: 'center'
};

NavbarWrapper.displayName = 'NavbarWrapper';

export default Navbar;
