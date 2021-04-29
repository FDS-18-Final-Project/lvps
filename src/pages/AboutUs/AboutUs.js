import CardExplanation from 'containers/CardExplanation/CardExplanation';
import StaffIntroduction from 'containers/StaffIntroduction/StaffIntroduction';
import SubMainBanner from 'containers/SubMainBanner/SubMainBanner';
import GoogleMap from 'containers/GoogleMap/GoogleMap';
import React from 'react';
import { motion } from 'framer-motion';
import { aboutUsCardList } from 'data/Data';

const AboutUs = () => {
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
      <SubMainBanner
        bgImg="/assets/about-us-bg.png"
        title="About Us"
        desc="Luxury Vehicle Protection Services For Your Car"
      ></SubMainBanner>
      <CardExplanation
        cardList={aboutUsCardList}
        title="Why Choose Us"
      ></CardExplanation>
      <StaffIntroduction />
      <GoogleMap />
    </motion.main>
  );
};

AboutUs.displayName = 'AboutUs';

export default AboutUs;
