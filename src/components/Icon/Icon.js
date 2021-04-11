import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import svg from 'assets';
import theme from 'theme/theme';
import Layout from 'pages/Layout/Layout';

const { calcRem } = theme;

const IconWrapper = styled(Layout.FlexContainer)`
  margin-bottom: ${calcRem(10)};

  svg {
    margin-right: ${calcRem(5)};
  }

  path {
    fill: ${({ color }) => color};
  }
`;

const Icon = ({ type, color, children, ...restProps }) => {
  return (
    <IconWrapper color={color} align="center" justify="flex-start">
      {React.createElement(svg[type], { ...restProps })}
      {children}
    </IconWrapper>
  );
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string
};

Icon.defaultProps = {
  type: 'rightArrow',
  color: 'red'
};

IconWrapper.displayName = 'IconWrapper';

export default Icon;
