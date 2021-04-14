import { string } from 'prop-types';
import styled, { css } from 'styled-components';
import { colors, fontSizes, calcRem, calcInterval } from 'theme/theme';
import { Button, Divider, Icon, Paragraph } from 'components';

const MainBannerBg = css`
  width: 100%;
  height: auto;
  /* width: 100%;
  height: 100vh; */
  /* padding-top: 20%; */
  /* height: 100vw; */
  background: url(${props => props.bgImg}) center center / cover no-repeat;
  background-attachment: fixed;
`;

const StyledMainBannerContainer = styled.section`
  ${MainBannerBg}
  height: 674px;
`;

const FullContainer = styled.div`
  padding: ${calcInterval([11, 111])};
  width: ${calcRem(1200)};
  margin: 0 auto;
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
        <Divider width="150px" />
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
