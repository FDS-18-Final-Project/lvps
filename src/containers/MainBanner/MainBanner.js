import { string } from 'prop-types';
import styled from 'styled-components';
import { colors, fontSizes, calcRem, calcInterval, device } from 'theme/theme';
import Button from 'components/Button/Button';
import Divider from 'components/Divider/Divider';
import Icon from 'components/Icon/Icon';
import Paragraph from 'components/Paragraph/Paragraph';
import { useViewSize } from 'hooks';

const StyledMainBannerContainer = styled.section`
  position: relative;
  background: url(${props => props.bgImg}) center center / cover no-repeat;
  padding: ${calcInterval([130, 100])};

  ${device.desktop} {
    padding: ${calcInterval([100, 50])};
  }

  ${device.tablet} {
    text-align: center;
    margin: 0 auto;
    h2 {
      font-weight: 800;
    }
    li {
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
    margin-bottom: ${calcRem(13)};
  }
  li:last-child {
    margin-bottom: ${calcRem(34)};
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
          <span className="subTitle">For Your Car</span>
        </StyledHeading>
        <Divider width={150} className="divider" />
        <StyledParagraph
          type="list"
          link
          items={[
            'Ceramic Coating',
            'Paint Protection Film',
            'Detailing & Painting Correction',
            'Window Tinting',
            'Wheel & Tire'
          ]}
          size={18}
          colors={{ main: '', sub: colors.lightGray }}
          to="/"
        />
        <Button mode="link" to="/" width={270} fontSize={18} padding="10">
          Get a Free Quote
          <Icon type="rightArrow" color={colors.white} />
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
