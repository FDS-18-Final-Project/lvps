import styled from 'styled-components';
import { LinkIcon, Paragraph } from 'components';
import { colors, calcInterval } from 'theme/theme';
import Layout from 'pages/Layout/Layout';

const GetAQuoteBannerBlock = styled(Layout.FlexContainer)`
  background-color: ${colors.red_05};
  padding: ${calcInterval([108, 200])};
`;

const GetAQuoteBanner = ({ children }) => {
  return (
    <GetAQuoteBannerBlock tag="section" justify="space-between">
      {children}
    </GetAQuoteBannerBlock>
  );
};

GetAQuoteBanner.Title = () => {
  return (
    <Paragraph
      type="title"
      title="Get a free quote"
      headingNum={2}
      colors={{ main: colors.white, sub: colors.lightGray }}
      size="24"
    >
      If you want to check our works, press the button.
    </Paragraph>
  );
};

GetAQuoteBanner.Link = () => {
  return <LinkIcon mode="secondary">Get a Free Quote</LinkIcon>;
};

GetAQuoteBannerBlock.displayName = 'GetAQuoteBannerBlock';
GetAQuoteBanner.Title.displayName = 'GetAQuoteBanner-Title';
GetAQuoteBanner.Link.displayName = 'GetAQuoteBanner-Link';

export default GetAQuoteBanner;
