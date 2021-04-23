import GetAQuoteCheckbox from 'containers/GetAQuoteCheckbox/GetAQuoteCheckbox';
import SubMainBanner from 'containers/SubMainBanner/SubMainBanner';
import SubPageTitle from 'containers/SubPageTitle/SubPageTitle';
import React from 'react';
import { motion } from 'framer-motion';

const GetAQuote = () => {
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
        title="GET A QUOTE"
        desc="LVPS for your car"
        bgImg="assets/CeramicCoatingBannerImage.png"
      />
      <SubPageTitle title="Get a Quote" desc="Meet Our Quality Services" />
      <GetAQuoteCheckbox />
    </motion.main>
  );
};

export default GetAQuote;
