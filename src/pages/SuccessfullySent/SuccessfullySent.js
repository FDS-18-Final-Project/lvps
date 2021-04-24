import React from 'react';
import styled from 'styled-components';
import { calcRem, colors, device } from 'theme/theme';
import MessageContainer from 'containers/MessageBox/MessageBox';
import Button from 'components/Button/Button';
import Icon from 'components/Icon/Icon';

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
      <SuccessMessage
        title="Successfully Sent"
        message={
          <>
            'Contrary to belief, Lorem Ipsum is not simply random text.
            <br />
            making it over 2000 years old.'
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
