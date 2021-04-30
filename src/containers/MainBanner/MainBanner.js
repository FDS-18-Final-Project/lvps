import { string } from 'prop-types';
import styled from 'styled-components';
import { colors, fontSizes, calcRem, calcInterval, device } from 'theme/theme';
import Button from 'components/Button/Button';
import Divider from 'components/Divider/Divider';
import Icon from 'components/Icon/Icon';
import Paragraph from 'components/Paragraph/Paragraph';
import { useViewSize } from 'hooks';
import { linkLists } from 'data/Data';

const StyledMainBannerContainer = styled.section`
  position: relative;
  background: url(${props => props.bgImg}) center center / cover no-repeat;
  padding: ${calcInterval([70, 100])};

  ${device.desktop} {
    padding: ${calcInterval([100, 50])};
  }

  ${device.tablet} {
    text-align: center;
    margin: 0 auto;
    h2 {
      font-weight: 800;
    }
  }
`;

const StyledOverlay = styled.div`
  display: ${({ mobile }) => (mobile ? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background: #2d2d2d;
  opacity: 0.6;
`;

const FullContainer = styled.div`
  position: relative;
  z-index: 1000;
  max-width: ${calcRem(1200)};
  margin: 0 auto;

  div:nth-child(7) {
    margin-bottom: ${calcRem(45)};
  }

  ${device.tablet} {
    .divider {
      width: 80px;
      margin: 30px auto;
    }

    a {
      margin: 0 auto;
    }
  }
`;

const StyledHeading = styled.h2`
  color: ${colors.white};
  line-height: ${calcRem(75)};

  span {
    display: block;
  }
  .ourName {
    font-weight: 800;
    font-size: ${fontSizes.titleLarge};
  }
  .subTitle {
    font-weight: 400;
    font-size: ${calcRem(42)};
  }

  ${device.tablet} {
    .subTitle {
      display: none;
    }
  }
`;

const StyledParagraph = styled(Paragraph)`
  li {
    color: ${colors.white};
    margin-bottom: ${calcRem(20)};
  }
`;

const MainBanner = ({ bgImg }) => {
  const { mobile } = useViewSize();
  return (
    <StyledMainBannerContainer bgImg={bgImg}>
      <StyledOverlay mobile={mobile} />
      <FullContainer>
        <StyledHeading>
          <span className="ourName">LVPS</span>
          <span className="subTitle">Specialized Services</span>
        </StyledHeading>
        <Divider width={150} className="divider" />
        {linkLists.map(linkList => (
          <StyledParagraph
            key={linkList.id}
            type="list"
            link
            items={[linkList.keyword]}
            size={18}
            colors={{ main: '', sub: colors.lightGray }}
            to={linkList.link}
          />
        ))}
        <Button
          mode="link"
          to="/get-a-quote"
          width={270}
          fontSize={18}
          padding="10"
        >
          Get a Free Quote
          <Icon title="right arrow" type="rightArrow" color={colors.white} />
        </Button>
      </FullContainer>
    </StyledMainBannerContainer>
  );
};

MainBanner.propTypes = {
  /** 메인 배너 이미지 URL */
  bgImg: string
};

MainBanner.defaultProps = {
  bgImg: ''
};

StyledMainBannerContainer.displayName = 'StyledMainBannerContainer';

export default MainBanner;
