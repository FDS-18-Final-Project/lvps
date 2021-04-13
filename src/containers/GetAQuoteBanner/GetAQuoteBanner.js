import styled from 'styled-components';

import { colors, calcInterval } from 'theme/theme';
import { Button, Paragraph } from 'components';
import Layout from 'pages/Layout/Layout';

const StyledGetAQuoteBannerBlock = styled(Layout.FlexContainer)`
  background-color: ${colors.red_05};
  padding: ${calcInterval([75, 100])};
`;

const GetAQuoteBanner = ({ children }) => {
  return (
    <StyledGetAQuoteBannerBlock tag="section" justify="space-between">
      {children}
    </StyledGetAQuoteBannerBlock>
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

  return <Button mode="link" to='/get-a-quote'>Get a Free Quote</Button>;

};

StyledGetAQuoteBannerBlock.displayName = 'StyledGetAQuoteBannerBlock';
GetAQuoteBanner.Title.displayName = 'GetAQuoteBanner-Title';
GetAQuoteBanner.Link.displayName = 'GetAQuoteBanner-Link';

export default GetAQuoteBanner;
