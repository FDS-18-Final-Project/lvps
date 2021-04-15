import React from 'react';
import A11yHidden from 'components/A11yHidden/A11yHidden.styled';
import {
  GetAQuoteBanner,
  IconExplanCard,
  MainBanner,
  OurBestServices,
  OurWorks,
  Review,
  SubBanner,
  GoogleMap
} from 'containers';

const Home = () => {
  return (
    <>
      <A11yHidden>Main Page</A11yHidden>
      <MainBanner bgImg="assets/dummy_background_02.png"></MainBanner>
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
    </>
  );
};
export default Home;
