import React from 'react';
import A11yHidden from 'components/A11yHidden/A11yHidden.styled';
import {
  GetAQuoteBanner,
  Review,
  MainBanner,
  OurBestServices,
  OurWorks,
  SubBanner,
  IconExplanCard,
  GoogleMap
} from 'containers';

const Home = () => {
  return (
    <>
      <A11yHidden>Main Page</A11yHidden>
      <MainBanner bgImg="assets/dummy_background_02.png"></MainBanner>
      <GetAQuoteBanner />
      <Review>
        <Review.Title />
        <Review.Contents />
      </Review>
      <OurWorks />
      <SubBanner />
      <OurBestServices />
      <IconExplanCard>
        <IconExplanCard.Title />
        <IconExplanCard.Contents />
      </IconExplanCard>
      {/* <GoogleMap /> */}
    </>
  );
};
export default Home;
