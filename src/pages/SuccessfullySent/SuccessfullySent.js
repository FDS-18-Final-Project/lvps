import React from 'react';
import styled from 'styled-components';
import { calcRem, colors, device } from 'theme/theme';
import MessageContainer from 'containers/MessageBox/MessageBox';
import Button from 'components/Button/Button';
import Icon from 'components/Icon/Icon';
import { Helmet } from 'react-helmet-async';

const SuccessMessage = styled(MessageContainer)`
  background-color: ${colors.white};

  h2 {
    color: ${colors.red_05};
  }

  p {
    color: ${colors.black};
  }
`;

const StyledPage = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
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

const SuccessfullySent = () => {
  return (
    <StyledPage>
      <Helmet>
        <title>Successfully Sent</title>
      </Helmet>
      <SuccessMessage
        title="Successfully Sent"
        message={
          <>
            Your request was successfully received. We will get back to you as
            soon as possible. Thank you.
          </>
        }
      />
      <StyledButton styledmode="secondary" mode="link" to="/">
        Go Home
        <Icon title="right arrow" type="rightArrow" path={colors.black} />
      </StyledButton>
    </StyledPage>
  );
};

SuccessfullySent.displayName = 'SuccessfullySent';

export default SuccessfullySent;
