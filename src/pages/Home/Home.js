import React from 'react';
import A11yHidden from 'components/A11yHidden/A11yHidden.styled';
import {
  GetAQuoteBanner,
  Review,
  MainBanner,
  OurBestServices,
  OurWorks,
  SubBanner
  // GoogleMap
} from 'containers';
import { Icon } from 'components/';
import { colors } from 'theme/theme';
import { calcRem } from '../../theme/theme';

const Home = () => {
  return (
    <>
      <A11yHidden>Main Page</A11yHidden>
      <MainBanner bgImg="assets/dummy_background_02.png"></MainBanner>
      <SubBanner>
        More About us
        <Icon type="rightArrow" color={colors.white} width={calcRem(25)} />
      </SubBanner>
      <OurBestServices />
      <SubBanner title="Our Works" description="Visit our Instagram.">
        Visit Instagram
        <Icon type="instagram" color={colors.white} width={calcRem(25)} />
      </SubBanner>
      <Review>
        <Review.Title />
        <Review.Contents />
      </Review>
      <GetAQuoteBanner>
        <GetAQuoteBanner.Title />
        <GetAQuoteBanner.Link />
      </GetAQuoteBanner>
      <OurWorks>
        <OurWorks.Title />
        <OurWorks.Contents />
      </OurWorks>
      <SubBanner />
      <OurBestServices />
    </>
  );
};
export default Home;
