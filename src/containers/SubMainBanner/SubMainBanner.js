import styled, { css } from 'styled-components';
import { string } from 'prop-types';
import { colors, fontSizes, calcRem } from 'theme/theme';
import Divider from 'components/Divider/Divider';

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
  position: relative;
  @media only screen and (max-width: 768px) {
    height: ${calcRem(180)};
  }
`;

const FullContainer = styled.div`
  max-width: ${calcRem(1200)};
  margin: 0 auto;
  padding: 90px ${calcRem(50)} 0;
  position: relative;
  z-index: 100;

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
  font-family: Montserrat;
  font-weight: 800;
  @media only screen and (max-width: 768px) {
    font-size: ${fontSizes.xl};
  }
`;
const StyledDim = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
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
      <StyledDim>
        <FullContainer>
          <MainBannerTitle>{title}</MainBannerTitle>
          <Divider />
          <MainBannerDesc>{desc}</MainBannerDesc>
        </FullContainer>
      </StyledDim>
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
