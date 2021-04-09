import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import svg from 'assets';

const IconWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.margins.base};

  svg {
    margin-right: ${({ theme }) => theme.margins.small};
  }

  path {
    fill: ${({ color }) => color};
  }
`;

const Icon = ({ type, color, children, ...restProps }) => {
  return (
    <IconWrapper color={color}>
      {React.createElement(svg[type], { ...restProps })}
      {children}
    </IconWrapper>
  );
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Icon.defaultProps = {
  type: 'rightArrow',
  color: 'red',
};

IconWrapper.displayName = 'IconWrapper';

export default Icon;
