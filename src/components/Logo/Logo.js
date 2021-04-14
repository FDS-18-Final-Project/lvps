import React from 'react';
import { Link } from 'react-router-dom';
import { oneOf, number } from 'prop-types';
import styled from 'styled-components';
import { calcRem } from 'theme/theme';
import { ReactComponent as Image } from '../../assets/Logo.svg';

const StyledHeading = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  max-width: ${({ maxWidth }) => calcRem(maxWidth)};

  a {
    display: block;
    width: 100%;
    height: 100%;
    color: inherit;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

// 사용 할 tag 전달
const Logo = ({ tag, ...restProps }) => {
  return (
    <StyledHeading as={tag} {...restProps}>
      <Link to="/">
        <Image title="Logo" />
      </Link>
    </StyledHeading>
  );
};

Logo.propTypes = {
  tag: oneOf(['h1', 'h2', 'h3']),
  maxWidth: number
};

Logo.defaultProps = {
  tag: 'h1',
  maxWidth: 200
};

StyledHeading.displayName = 'StyledHeading';
Image.displayName = 'Logo Image';

export default Logo;
