import styled, { css } from 'styled-components';
import { string } from 'prop-types';
import { Divider } from 'components';
import { colors, fontSizes, calcRem } from 'theme/theme';

// 메인 배너 스타일링
const MainBannerBg = css`
  background-image: url(${props => props.bgImg});
  background-size: cover;
`;

const StyledMainBanner = styled.div`
  ${MainBannerBg}
  height: ${calcRem(370)};
  box-sizing: border-box;
  width: 100%;
  @media only screen and (max-width: 768px) {
    height: ${calcRem(180)};
  }
`;

const FullContainer = styled.div`
  max-width: ${calcRem(1200)};
  margin: 0 auto;
  padding: 90px ${calcRem(50)} 0;

  & > div {
    margin: ${calcRem(30)} 0;
    width: 260px;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 50px ${calcRem(50)} 0;

    & > div {
      width: 40px;
      margin: ${calcRem(10)} 0;
    }
  }
`;

const MainBannerTitle = styled.h2`
  margin: ${calcRem(0)};
  color: ${colors.white};
  font-size: ${fontSizes.titleLarge};
  font-family: 'Montserrat';
  font-weight: 800;
  @media only screen and (max-width: 768px) {
    font-size: ${fontSizes.xl};
  }
`;

const MainBannerDesc = styled.p`
  color: ${colors.white};
  font-size: ${fontSizes.lg};
  font-weight: 500;
  @media only screen and (max-width: 768px) {
    margin: 0;
  }
`;

// 메인 배너 컴포넌트
const SubMainBanner = ({ bgImg, title, desc }) => {
  return (
    <StyledMainBanner bgImg={bgImg}>
      <FullContainer>
        <MainBannerTitle>{title}</MainBannerTitle>
        <Divider />
        <MainBannerDesc>{desc}</MainBannerDesc>
      </FullContainer>
    </StyledMainBanner>
  );
};

SubMainBanner.propTypes = {
  bgImg: string,
  title: string,
  desc: string
};

SubMainBanner.defaultProps = {
  title: 'Main Banner Title',
  desc: 'Main Banner Description',
  bgImg: ''
};

SubMainBanner.displayName = 'SubMainBanner';

export default SubMainBanner;
