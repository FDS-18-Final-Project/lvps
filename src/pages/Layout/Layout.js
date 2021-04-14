import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LayoutWrapper = styled.div`
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
  justifyContent: 'center',
  alignItems: 'center',
  direction: 'row'
};

Layout.FlexContainer.displayName = 'LayoutFlexWrapper';
LayoutWrapper.displayName = 'HeaderWrapper';
LayoutFlexContainer.displayName = 'LayoutFlexContainer';

export default Layout;
