import styled, { css } from 'styled-components'
import { string } from 'prop-types'

// 메인 배너 스타일링
const MainBannerBg = css`
  background-color: pink;
  // backgroung image로 변경해야함
  background-image: url(${props => (props.bgImg)});
`

const textColor = css`
  color: white;
`

const MainBannerTitle = styled.h2`
  display: inline-block;
  font-size: 70px;
  font-weight: 900;
  margin: 0;
  // title 하단 경계선 길이 확인 필요
  padding: 0 20px 45px 0;
  border-bottom: 4px solid ${textColor.color};
`

const MainBannerDesc = styled.p`
  // 텍스트 길이에 따라 width 지정 필요
  margin-top: 45px;
  font-size: 36px;
  font-weight: 500;
`

const StyledMainBanner = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 840px;
  padding-top: 240px;
  padding-left: 200px;
  padding-bottom: 400px;

  ${MainBannerBg}
  ${textColor}
`

// 메인 배너 컴포넌트
export default function MainBanner({ bgImg, title, desc}) {
  return (
  <StyledMainBanner bgImg={bgImg}>
    <MainBannerTitle>{title}</MainBannerTitle>
    <MainBannerDesc>{desc}</MainBannerDesc>
  </StyledMainBanner>
  )
  
}

MainBanner.propTypes = {
  bgImg: string,
  title: string, 
  desc: string,
}

MainBanner.defaultProps = {
  title: 'Main Banner Title',
  desc: 'Main Banner Description',
  bgImg: '',
}

MainBanner.displayName = 'MainBanner'
