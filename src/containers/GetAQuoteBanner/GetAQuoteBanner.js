import { Button, Paragraph } from 'components';
import styled from 'styled-components';
import theme from 'theme/theme';

const { colors, calcInterval } = theme;

const GetAQuoteBannerBlock = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.red_05};
  padding: ${calcInterval([108, 200])};
`;

const GetAQuoteBanner = ({ children }) => {
  return <GetAQuoteBannerBlock>{children}</GetAQuoteBannerBlock>;
};

GetAQuoteBanner.Title = () => {
  return (
    <Paragraph
      type="title"
      title="Get a free quote"
      headingNum={2}
      colors={{ main: theme.colors.white, sub: theme.colors.lightGray }}
      size="24"
    >
      If you want to check our works, press the button.
    </Paragraph>
  );
};

GetAQuoteBanner.Link = () => {
  return <Button mode="secondary">Get a Free Quote</Button>;
};

GetAQuoteBannerBlock.displayName = 'GetAQuoteBannerBlock';
GetAQuoteBanner.Title.displayName = 'GetAQuoteBanner-Title';
GetAQuoteBanner.Link.displayName = 'GetAQuoteBanner-Link';

export default GetAQuoteBanner;
