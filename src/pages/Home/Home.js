import React from 'react';
import A11yHidden from 'components/A11yHidden/A11yHidden.styled';
import { colors, calcRem } from 'theme/theme';
import MainBanner from 'containers/MainBanner/MainBanner';
import ServiceInfo from 'containers/ServiceInfo/ServiceInfo';
import OurBestServices from 'containers/OurBestServices/OurBestServices';
import SubBanner from 'containers/SubBanner/SubBanner';
import Icon from 'components/Icon/Icon';
import Review from 'containers/Review/Review';

import GetAQuoteBanner from 'containers/GetAQuoteBanner/GetAQuoteBanner';


const Home = () => {
  return (
    <>
      <A11yHidden>Main Page</A11yHidden>
      <MainBanner bgImg="assets/dummy_background_02.png"></MainBanner>
      <ServiceInfo
        mode="left"
        imagePath="assets/AboutUsCar.png"
        title="About Us"
        linkText="More About Us"
      >
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

      <GetAQuoteBanner />

      <Review />
    </>
  );
};
export default Home;
