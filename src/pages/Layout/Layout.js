import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LayoutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const LayoutFlexContainer = styled(motion.div)`
  display: flex;
  flex: ${({ flex }) => flex};
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
`;

const Layout = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

Layout.FlexContainer = ({ tag = 'div', children, ...restProps }) => {
  return (
    <LayoutFlexContainer as={tag} {...restProps}>
      {children}
    </LayoutFlexContainer>
  );
};

Layout.FlexContainer.defaultProps = {
  justifyContent: 'center',
  alignItems: 'center',
  direction: 'row'
};

LayoutContainer.displayName = 'LayoutContainer';
Layout.FlexContainer.displayName = 'LayoutFlexContainer';
LayoutFlexContainer.displayName = 'LayoutFlexContainer';

export default Layout;
