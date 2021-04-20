import styled from 'styled-components';
import { colors, calcInterval, calcRem, fontSizes } from 'theme/theme';
import { Button, Icon, Paragraph } from 'components';
import Layout from 'pages/Layout/Layout';
import useViewSize from 'hooks/useViewSize';
import { Link } from 'react-router-dom';

const StyledGetAQuoteBannerContainer = styled.section`
  padding: ${calcInterval([75, 100])};
  background-color: ${colors.red_05};

  @media only screen and (max-width: 1200px) {
    padding: ${calcRem(50)};
  }

  @media only screen and (max-width: 768px) {
    padding: 0;
    .getLink {
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${colors.white};
      font-size: ${fontSizes.xxxl};
      padding: 30px;
    }

    .icon {
      margin-left: 50px;
    }
  }
`;

const FullContainer = styled(Layout.FlexContainer)`
  max-width: ${calcRem(1200)};
  margin: 0 auto;

  @media only screen and (max-width: 1200px) {
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    .title {
      display: none;
    }
  }
`;

const GetAQuoteBanner = () => {
  const { desktop } = useViewSize();
  return (
    <StyledGetAQuoteBannerContainer>
      {desktop ? (
        <FullContainer justifyContent="space-between">
          <GetAQuoteBanner.Title />
          <GetAQuoteBanner.Link desktop={desktop} />
        </FullContainer>
      ) : (
        <Link to="/" className="getLink">
          Get a Free Quote{' '}
          <Icon
            className="icon"
            type="rightArrow"
            color={colors.white}
            width="20"
          />
        </Link>
      )}
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
      className="title"
    >
      If you want to check our works, press the button.
    </Paragraph>
  );
};

GetAQuoteBanner.Link = () => {
  return (
    <Button mode="link" to="/" width={220} fontSize={18} padding="10">
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
