import React from 'react';
import styled from 'styled-components';
import { calcRem, colors, device } from 'theme/theme';
import MessageBox from 'containers/MessageBox/MessageBox';
import Button from 'components/Button/Button';
import Icon from 'components/Icon/Icon';

const StyledPage = styled.section`
  display: flex;
  flex-direction: column;
  background-image: url('assets/dummy_background.png');
  justify-content: center;
  align-items: center;
  padding: ${calcRem(185)} 0;

  ${device.tablet} {
    padding: ${calcRem(50)} 0;
  }
`;

const StyledButton = styled(Button)`
  font-size: ${calcRem(18)};
`;

const PageNotFound = ({ ...restProps }) => {
  return (
    <>
      <StyledPage>
        <MessageBox
          title="404 Page Not Found"
          message={
            <>
              Sorry, the requested URL is not found.
              <br />
              Please go back to the homepage.
            </>
          }
        />
        <StyledButton styledmode="secondary" mode="link" to="/">
          Go Home
          <Icon title="right arrow" type="rightArrow" path={colors.black} />
        </StyledButton>
      </StyledPage>
    </>
  );
};

PageNotFound.displayName = 'PageNotFound';

export default PageNotFound;
