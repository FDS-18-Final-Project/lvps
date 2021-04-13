import { string } from 'prop-types';
import styled, { css } from 'styled-components';
import { colors, fontSizes, calcRem, calcInterval } from 'theme/theme';
import { Divider, LinkIcon, Paragraph } from 'components';

const MainBannerBg = css`
  background-image: url(${props => props.bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
`;

const StyledMainBannerBlock = styled.div`
  ${MainBannerBg}

  width: 100%;
  padding: ${calcInterval([130, 100])};
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
    <StyledMainBannerBlock bgImg={bgImg}>
      <StyledHeading>
        <span class="ourName">LVPS</span>
        <span class="subTitle">For Your Car</span>
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
        size="18"
        colors={{ main: '', sub: colors.lightGray }}
      />
      <LinkIcon mode="secondary">Get a Free Quote</LinkIcon>
    </StyledMainBannerBlock>
  );
};

MainBanner.propTypes = {
  bgImg: string
};

MainBanner.defaultProps = {
  bgImg: ''
};

StyledMainBannerBlock.displayName = 'StyledMainBannerBlock';

export default MainBanner;
