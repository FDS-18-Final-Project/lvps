import { oneOf } from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavbarWrapper = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  font-size: ${props => props.theme.fontSizes.xxxl};

  a {
    display: inline-block;
    padding: 2rem 0;
    transition: 0.4s;
    text-decoration: none;
    color: inherit;

    &:hover {
      color: rgba(235, 21, 39, 0.8);
    }
  }

  li {
    margin: 0 20px;
  }

  .active {
    color: rgba(235, 21, 39, 0.8);
  }
`;

function Navbar({ ...restProps }) {
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
}

Navbar.defaultProps = {
  direction: 'row',
  justify: 'space-between',
  align: 'center',
};

Navbar.propTypes = {
  direction: oneOf(['row', 'column']),
  justify: oneOf([
    'center',
    'space-between',
    'space-around',
    'flex-start',
    'flex-end',
  ]),
  align: oneOf([
    'center',
    'space-between',
    'space-around',
    'flex-start',
    'flex-end',
  ]),
};

NavbarWrapper.displayName = 'NavbarWrapper';

export default Navbar;
