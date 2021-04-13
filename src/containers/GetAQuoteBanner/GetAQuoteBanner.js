import styled from 'styled-components';
import { colors, calcInterval, calcRem } from 'theme/theme';
import { Button, Icon, Paragraph } from 'components';
import Layout from 'pages/Layout/Layout';

const StyledGetAQuoteBannerContainer = styled.div`
  padding: ${calcInterval([75, 100])};
  background-color: ${colors.red_05};
`;

const FullContainer = styled(Layout.FlexContainer)`
  width: ${calcRem(1200)};
  margin: 0 auto;
`;

const GetAQuoteBanner = ({ children }) => {
  return (
    <StyledGetAQuoteBannerContainer>
      <FullContainer tag="section" justifyContent="space-between">
        {children}
      </FullContainer>
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
      size={15}
    >
      If you want to check our works, press the button.
    </Paragraph>
  );
};

GetAQuoteBanner.Link = () => {
  return (
    <Button mode="link" to="/" width={270} fontSize={18} padding="20">
      Get a Free Quote
      <Icon type="rightArrow" color={colors.white} />
    </Button>
  );
};

StyledGetAQuoteBannerContainer.displayName = 'StyledGetAQuoteBannerContainer';
FullContainer.displayName = 'FullContainer';
GetAQuoteBanner.Title.displayName = 'GetAQuoteBanner-Title';
GetAQuoteBanner.Link.displayName = 'GetAQuoteBanner-Link';

export default GetAQuoteBanner;
