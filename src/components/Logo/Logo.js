import { oneOf, node } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { calcRem } from '../../utils/calcRem';

const LogoWrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  padding: ${calcRem(20)};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Heading = styled.h1`
  margin: 0;
`;

// 사용 할 tag, children 전달
function Logo({ tag, children, ...restProps }) {
  return (
    <LogoWrapper {...restProps}>
      <Heading as={tag}>{children}</Heading>
    </LogoWrapper>
  );
}

Logo.defaultProps = {
  tag: 'h1',
  width: '200px',
  height: '30px',
};

Logo.propTypes = {
  tag: oneOf(['h1', 'h2', 'h3']),
  children: node,
};

export default Logo;
