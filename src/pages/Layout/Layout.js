import React from 'react';
import styled from 'styled-components';
import theme from 'theme/theme';
import { motion } from 'framer-motion';

const LayoutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${theme.colors.black};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: ${theme.colors.white};
`;

const LayoutFlexContainer = styled(motion.div)`
  display: flex;
  flex: ${props => props.flex};
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
`;
const Layout = ({ children }) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};

Layout.FlexContainer = ({ tag = 'div', children, ...restProps }) => {
  return (
    <LayoutFlexContainer as={tag} {...restProps}>
      {children}
    </LayoutFlexContainer>
  );
};

Layout.FlexContainer.defaultProps = {
  justify: 'center',
  align: 'center',
  direction: 'row'
};

Layout.FlexContainer.displayName = 'LayoutFlexWrapper';
LayoutWrapper.displayName = 'HeaderWrapper';
LayoutFlexContainer.displayName = 'LayoutFlexContainer';

export default Layout;
