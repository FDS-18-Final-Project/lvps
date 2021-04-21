import React from 'react';
import { NavLink } from 'react-router-dom';
import { oneOf } from 'prop-types';
import styled from 'styled-components';
import { calcRem, fontSizes } from 'theme/theme';
import { motion } from 'framer-motion';
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
    padding: 30px ${calcRem(10)};
    &:hover {
      color: rgba(235, 21, 39, 0.8);
    }
  }

  .active {
    color: rgba(235, 21, 39, 0.8);
  }

  .serviceLink .hoverbox {
    top: 90px;
    opacity: 0;
    z-index: -1000;
    transition: 0.5s;
    a {
      padding: 0 30px;
    }
  }
  .serviceLink:hover .hoverbox {
    opacity: 1;
    z-index: 1000;
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
      <li className="serviceLink">
        <NavLink to="/mainService">SERVICES</NavLink>
        <HoverBox className="hoverbox" />
      </li>
      <li>
        <NavLink to="/get-a-queue">GET A QUOUE</NavLink>
      </li>
      <li>
        <NavLink to="/FAQ">FAQ</NavLink>
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
