import React from 'react';
import A11yHidden from 'components/A11yHidden/A11yHidden.styled';
import { colors, calcRem } from 'theme/theme';
import MainBanner from 'containers/MainBanner/MainBanner';
import ServiceInfo from 'containers/ServiceInfo/ServiceInfo';
import CardExplanation from 'containers/CardExplanation/CardExplanation';
import OurBestServices from 'containers/OurBestServices/OurBestServices';
import SubBanner from 'containers/SubBanner/SubBanner';
import Icon from 'components/Icon/Icon';
import Reviews from 'containers/Reviews/Reviews';
import GetAQuoteBanner from 'containers/GetAQuoteBanner/GetAQuoteBanner';
import { motion } from 'framer-motion';
import GoogleMap from 'containers/GoogleMap/GoogleMap';
import { squareCardList } from 'data/Data';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.2, type: 'tween' }
      }}
      enter={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <Helmet>
        <title>HomePage</title>
      </Helmet>
      <A11yHidden>Main Page</A11yHidden>
      <MainBanner bgImg="assets/Mainbanner.png"></MainBanner>
      <ServiceInfo
        mode="left"
        imagePath="assets/AboutUsCar.jpg"
        title="About Us"
        to="/about-us"
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
      <CardExplanation title="Why Choose Us" cardList={squareCardList} />
      <SubBanner
        title="Our Work"
        description={
          <span>
            Check out our Instagram page {<br />} to see our recent projects.
          </span>
        }
      >
        Visit Instagram
        <Icon type="instagram" color={colors.white} width={calcRem(25)} />
      </SubBanner>
      <GetAQuoteBanner
        title="Get a Free Quote"
        color="red_05"
        linkText="Get a Free Quote"
        styledmode="secondary"
      />

      <Reviews />
      <GoogleMap />
    </motion.main>
  );
};
export default Home;
