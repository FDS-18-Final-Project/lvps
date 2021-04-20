import { string } from 'prop-types';
import styled from 'styled-components';
import { colors, fontSizes, calcRem, calcInterval } from 'theme/theme';
import Button from 'components/Button/Button';
import Divider from 'components/Divider/Divider';
import Icon from 'components/Icon/Icon';
import Paragraph from 'components/Paragraph/Paragraph';

const StyledMainBannerContainer = styled.section`
  background: url(${props => props.bgImg}) center center / cover no-repeat;
  padding: ${calcInterval([130, 100])};

  @media only screen and (max-width: 1200px) {
    padding: ${calcInterval([100, 50])};
  }

  @media only screen and (max-width: 768px) {
    text-align: center;
    margin: 0 auto;
    h2 {
      font-weight: 800;
    }
    li {
    }
  }
`;

const FullContainer = styled.div`
  max-width: ${calcRem(1200)};
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
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
    font-family: 'Helvetica Neue LT Pro';
    font-weight: 500;
  }
  .subTitle {
    font-weight: 400;
    font-size: ${calcRem(42)};
  }

  @media only screen and (max-width: 768px) {
    .subTitle {
      display: none;
    }
  }
`;

const StyledParagraph = styled(Paragraph)`
  li {
    margin-bottom: ${calcRem(13)};
  }
  li:last-child {
    margin-bottom: ${calcRem(34)};
  }
`;

const MainBanner = ({ bgImg }) => {
  return (
    <StyledMainBannerContainer bgImg={bgImg}>
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
  bgImg: string
};

MainBanner.defaultProps = {
  bgImg: ''
};

StyledMainBannerContainer.displayName = 'StyledMainBannerContainer';

export default MainBanner;
