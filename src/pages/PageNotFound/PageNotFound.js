import React from 'react';
import styled from 'styled-components';
import { calcRem, colors } from 'theme/theme';
import ErrorMessage from 'containers/ErrorMessage/ErrorMessage';
import Button from 'components/Button/Button';
import Icon from 'components/Icon/Icon';

const StyledPage = styled.section`
  display: flex;
  flex-direction: column;
  background-image: url('assets/dummy_background.png');
  justify-content: center;
  align-items: center;
  padding: ${calcRem(185)} 0;
`;

const StyledButton = styled(Button)`
  font-size: ${calcRem(18)};
`;

const PageNotFound = () => {
  return (
    <StyledPage>
      <ErrorMessage />
      <StyledButton styledmode="secondary" mode="link" to="/">
        Go Home
        <Icon type="rightArrow" path={colors.black} />
      </StyledButton>
    </StyledPage>
  );
};

PageNotFound.displayName = 'PageNotFound';

export default PageNotFound;
