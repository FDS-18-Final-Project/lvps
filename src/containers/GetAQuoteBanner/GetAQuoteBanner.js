import styled from 'styled-components';
import { colors, calcInterval, calcRem, fontSizes } from 'theme/theme';
import Layout from 'pages/Layout/Layout';
import { useViewSize } from 'hooks/';
import { Link } from 'react-router-dom';
import Icon from 'components/Icon/Icon';
import Paragraph from 'components/Paragraph/Paragraph';
import Button from 'components/Button/Button';

const StyledGetAQuoteBannerContainer = styled.section`
  padding: ${calcInterval([75, 100])};
  background-color: ${({ color }) => colors[color]};
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

  a {
    border: ${({ borderColor }) => colors[borderColor]};

    &:hover {
      background-color: ${({ hoverColor }) => colors[hoverColor]};
      border: 2px solid ${colors.white};
    }
    path {
      fill: ${({ iconcolor }) => colors[iconcolor]};
    }
  }

  @media only screen and (max-width: 1200px) {
    width: 100%;

    h2 {
      font-size: ${fontSizes.xxl};
    }

    a {
      font-size: ${fontSizes.base};
    }
  }

  @media only screen and (max-width: 768px) {
    .title {
      display: none;
    }
  }
`;

const GetAQuoteBanner = ({
  title,
  desc,
  linkText,
  color,
  styledmode,
  borderColor,
  hoverColor,
  iconcolor
}) => {
  const { desktop } = useViewSize();
  return (
    <StyledGetAQuoteBannerContainer color={color}>
      {desktop ? (
        <FullContainer
          justifyContent="space-between"
          borderColor={borderColor}
          hoverColor={hoverColor}
          iconcolor={iconcolor}
        >
          <GetAQuoteBanner.Title title={title} desc={desc} />
          <GetAQuoteBanner.Link
            styledmode={styledmode}
            linkText={linkText}
            desktop={desktop}
          />
        </FullContainer>
      ) : (
        <Link to="/" className="getLink">
          {linkText}
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

GetAQuoteBanner.Title = ({ title, desc }) => {
  return (
    <Paragraph
      type="title"
      title={title}
      headingNum={2}
      colors={{ main: colors.white, sub: colors.lightGray }}
      size={15}
      className="title"
    >
      {desc}
    </Paragraph>
  );
};

GetAQuoteBanner.Link = ({ linkText, styledmode }) => {
  return (
    <Button
      styledmode={styledmode}
      mode="link"
      to="/"
      width={220}
      fontSize={18}
      padding="10"
    >
      {linkText}
      <Icon type="rightArrow" color={colors.white} />
    </Button>
  );
};

StyledGetAQuoteBannerContainer.displayName = 'StyledGetAQuoteBannerContainer';
FullContainer.displayName = 'FullContainer';
GetAQuoteBanner.Title.displayName = 'GetAQuoteBanner-Title';
GetAQuoteBanner.Link.displayName = 'GetAQuoteBanner-Link';

export default GetAQuoteBanner;
