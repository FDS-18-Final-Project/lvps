import styled, { css } from 'styled-components';
import { string } from 'prop-types';
import { Divider } from 'components';
import theme from 'theme/theme';

const { colors, fontSizes, calcRem } = theme;

// 메인 배너 스타일링
const MainBannerBg = css`
  // backgroung image로 변경해야함
  background-color: pink;
  background-image: url(${props => props.bgImg});
`;

const MainBannerTitle = styled.h2`
  margin: ${calcRem(0)};
  color: ${colors.white};
  font-size: ${fontSizes.titleLarge};
  font-weight: 900;
`;

const MainBannerDesc = styled.p`
  color: ${colors.lightGray};
  font-size: ${fontSizes.lg};
  font-weight: 500;
`;

const StyledMainBanner = styled.div`
  ${MainBannerBg}

  width: 100%;
  padding-top: ${calcRem(240)};
  padding-bottom: ${calcRem(400)};
  padding-left: ${calcRem(200)};
`;

// 메인 배너 컴포넌트
const MainBanner = ({ bgImg, title, desc }) => {
  return (
    <StyledMainBanner bgImg={bgImg}>
      <MainBannerTitle>{title}</MainBannerTitle>
      <Divider />
      <MainBannerDesc>{desc}</MainBannerDesc>
    </StyledMainBanner>
  );
};

MainBanner.propTypes = {
  bgImg: string,
  title: string,
  desc: string
};

MainBanner.defaultProps = {
  title: 'Main Banner Title',
  desc: 'Main Banner Description',
  bgImg: ''
};

MainBanner.displayName = 'MainBanner';

export default MainBanner;
