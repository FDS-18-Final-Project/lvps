import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
`;

function HeaderLayout({ children }) {
  return <HeaderWrapper>{children}</HeaderWrapper>;
}

HeaderLayout.LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default HeaderLayout;
