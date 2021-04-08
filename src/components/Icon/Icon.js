import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import svg from 'assets';

const IconWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  // TODO: rem으로 변경
  margin-bottom: 10px;
  svg {
    // TODO: rem으로 변경
    margin-right: 5px;
  }
  path {
    fill: ${(props) => props.color};
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

IconWrapper.displayName = 'IconWrapper';

Icon.defaultProps = {
  color: 'red',
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Icon;
