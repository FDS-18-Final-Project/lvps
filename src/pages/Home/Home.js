import React from 'react';
import A11yHidden from 'components/A11yHidden/A11yHidden.styled';
import {
  GetAQuoteBanner,
  Review,
  MainBanner,
  OurBestServices,
  OurWorks,
  SubBanner,
  IconKeyFeature,
  IconExplanCard,
  WindowTintingPrice,
  ServiceInfo
  // GoogleMap
} from 'containers';
import { Icon, Video } from 'components/';
import { colors } from 'theme/theme';
import { calcRem } from '../../theme/theme';

const Home = () => {
  return (
    <>
      <A11yHidden>Main Page</A11yHidden>
      <MainBanner bgImg="assets/dummy_background_02.png"></MainBanner>
      <ServiceInfo imagePath="assets/dummy_ceramicpro.png" title="About Us">
        Luxury Vehicle Protection Services is your ultimate one-stop-shop for
        auto care where you will receive the best quality of services and
        products. We believe in going above and beyond for our valued customers
        by offering only perfection, which leads to highest customer
        satisfaction. With many years of built knowledge about top quality
        products for auto care, we take pride in our work, and make sure that
        each client is highly satisfied with us. Please feel free to contact us
        for your auto care needs.
      </ServiceInfo>
      <OurBestServices />

      <SubBanner title="Our Works" description="Visit our Instagram.">
        Visit Instagram
        <Icon type="instagram" color={colors.white} width={calcRem(25)} />
      </SubBanner>
      <Video videoId="dEHu-STjB-Q" />
      <Review>
        <Review.Title />
        <Review.Contents />
      </Review>
      <GetAQuoteBanner>
        <GetAQuoteBanner.Title />
        <GetAQuoteBanner.Link />
      </GetAQuoteBanner>
      <Review>
        <Review.Title />
        <Review.Contents />
      </Review>
      <OurWorks>
        <OurWorks.Title />
        <OurWorks.Contents />
      </OurWorks>
      <SubBanner />
      <OurBestServices />
      <IconExplanCard />
      <IconKeyFeature />

      <WindowTintingPrice />
    </>
  );
};
export default Home;
