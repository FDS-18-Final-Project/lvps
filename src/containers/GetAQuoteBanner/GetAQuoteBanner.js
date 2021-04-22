import { string, number, object, oneOfType, func } from 'prop-types';
import styled from 'styled-components';
import { colors, calcInterval, calcRem, fontSizes, device } from 'theme/theme';
import Layout from 'pages/Layout/Layout';
import { useViewSize } from 'hooks/';
import { Link } from 'react-router-dom';
import Icon from 'components/Icon/Icon';
import Paragraph from 'components/Paragraph/Paragraph';
import Button from 'components/Button/Button';

const StyledGetAQuoteBannerContainer = styled.section`
  padding: ${calcInterval([75, 100])};
  background-color: ${({ color }) => colors[color]};
  ${device.desktop} {
    padding: ${calcRem(50)};
  }

  ${device.tablet} {
    padding: 0;
    .getLink {
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${colors.white};
      font-size: ${fontSizes.xxl};
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
    font-size: ${fontSizes.base};

    &:hover {
      background-color: ${({ hoverColor }) => colors[hoverColor]};
      border: 2px solid ${colors.white};
    }
    path {
      fill: ${({ iconcolor }) => colors[iconcolor]};
    }
  }

  ${device.desktop} {
    width: 100%;

    h2 {
      font-size: ${fontSizes.xxl};
    }

    a {
      font-size: ${fontSizes.base};
    }
  }

  ${device.tablet} {
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
  iconcolor,
  width,
  to
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
            width={width}
            to={to}
          />
        </FullContainer>
      ) : (
        <Link to={to} className="getLink">
          {linkText}
          <Icon
            title="right arrow"
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

GetAQuoteBanner.Link = ({ linkText, styledmode, width, to }) => {
  return (
    <Button
      styledmode={styledmode}
      mode="link"
      width={width}
      to={to}
      fontSize={18}
      padding="10"
    >
      {linkText}
      <Icon title="right arrow" type="rightArrow" color={colors.white} />
    </Button>
  );
};

GetAQuoteBanner.propTypes = {
  /** 배너 설명 */
  desc: string,
  /** 배너 링크(버튼) 텍스트 */
  linkText: string,
  /** 배너 배경색 */
  color: string,
  /** 배너 링크(버튼) 모드 */
  styledmode: string,
  /** 배너 링크(버튼) border 색 */
  borderColor: string,
  /** 배너 링크(버튼) 호버시 색 */
  hoverColor: string,
  /** 배너 링크(버튼) 아이콘 색 */
  iconcolor: string,
  width: number,
  to: string
};

GetAQuoteBanner.defaultProps = {
  title: 'Get a Free Quote',
  color: 'red_05',
  linkText: 'Get a Free Quote',
  styledmode: 'secondary',
  width: 220,
  to: '/get-a-quote'
};

StyledGetAQuoteBannerContainer.displayName = 'StyledGetAQuoteBannerContainer';
FullContainer.displayName = 'FullContainer';
GetAQuoteBanner.Title.displayName = 'GetAQuoteBanner-Title';
GetAQuoteBanner.Link.displayName = 'GetAQuoteBanner-Link';

export default GetAQuoteBanner;
