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
import FeaturesBenefits from 'containers/FeaturesBenefits/FeaturesBenefits';
import CarCareGuide from 'containers/CarCareGuide/CarCareGuide';
import { motion } from 'framer-motion';

const squareCardList = [
  {
    id: 1,
    type: 'square',
    content: [
      {
        id: 1,
        content:
          'Professional services & products offered to exceed your expectations'
      }
    ],
    iconType: 'likeCircle',
    background: colors.black,
    fontColor: colors.white
  },
  {
    id: 2,
    type: 'square',
    content: [
      { id: 1, content: 'Certified Professional & Trained Installers' }
    ],
    iconType: 'likeCircle',
    background: colors.black,
    fontColor: colors.white
  },
  {
    id: 3,
    type: 'square',
    content: [{ id: 1, content: '100% Satisfaction Guaranteed' }],
    iconType: 'likeCircle',
    background: colors.black,
    fontColor: colors.white
  },
  {
    id: 4,
    type: 'square',
    content: [{ id: 1, content: 'We work with every make & model' }],
    iconType: 'likeCircle',
    background: colors.black,
    fontColor: colors.white
  },
  {
    id: 5,
    type: 'square',
    content: [{ id: 1, content: 'Pick up & delivery service available' }],
    iconType: 'likeCircle',
    background: colors.black,
    fontColor: colors.black
  },
  {
    id: 6,
    type: 'square',
    content: [{ id: 1, content: 'Mobile services on request' }],
    iconType: 'likeCircle',
    background: colors.black,
    fontColor: colors.white
  }
];

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
      <CardExplanation
        title="Our Quality Protection Services"
        cardList={squareCardList}
      />
      <SubBanner title="Our Works" description="Visit our Instagram.">
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
    </motion.main>
  );
};
export default Home;
