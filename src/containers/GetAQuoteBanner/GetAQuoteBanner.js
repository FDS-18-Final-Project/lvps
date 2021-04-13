import styled from 'styled-components';

import { colors, calcInterval } from 'theme/theme';
import { Button, Paragraph } from 'components';
import Layout from 'pages/Layout/Layout';

const StyledGetAQuoteBannerContainer = styled(Layout.FlexContainer)`
  background-color: ${colors.red_05};
  padding: ${calcInterval([75, 100])};
`;

const GetAQuoteBanner = ({ children }) => {
  return (
    <StyledGetAQuoteBannerContainer
      tag="section"
      justifyContent="space-between"
    >
      {children}
    </StyledGetAQuoteBannerContainer>
  );
};

GetAQuoteBanner.Title = () => {
  return (
    <Paragraph
      type="title"
      title="Get a free quote"
      headingNum={2}
      colors={{ main: colors.white, sub: colors.lightGray }}
      size="15"
    >
      If you want to check our works, press the button.
    </Paragraph>
  );
};

GetAQuoteBanner.Link = () => {
  return <Button mode="secondary">Get a Free Quote</Button>;
};

StyledGetAQuoteBannerContainer.displayName = 'StyledGetAQuoteBannerContainer';
GetAQuoteBanner.Title.displayName = 'GetAQuoteBanner-Title';
GetAQuoteBanner.Link.displayName = 'GetAQuoteBanner-Link';

export default GetAQuoteBanner;
