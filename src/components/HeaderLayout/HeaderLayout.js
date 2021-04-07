import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
`;

const HeaderLayoutFlexContainer = styled.div`
  display: flex;
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
`;

function HeaderLayout({ children }) {
  return <HeaderWrapper>{children}</HeaderWrapper>;
}

HeaderLayout.FlexContainer = ({ tag = 'div', children, ...restProps }) => {
  return (
    <HeaderLayoutFlexContainer as={tag} {...restProps}>
      {children}
    </HeaderLayoutFlexContainer>
  );
};

HeaderWrapper.displayName = 'HeaderWrapper';
HeaderLayoutFlexContainer.displayName = 'LayoutFlexContainer';

export default HeaderLayout;
