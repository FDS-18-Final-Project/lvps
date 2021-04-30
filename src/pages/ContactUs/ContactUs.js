import SubMainBanner from 'containers/SubMainBanner/SubMainBanner';
import SubPageTitle from 'containers/SubPageTitle/SubPageTitle';
import ChooseUs from 'containers/ChooseUs/ChooseUs';
import React from 'react';
import { motion } from 'framer-motion';
import GoogleMap from 'containers/GoogleMap/GoogleMap';
import { Helmet } from 'react-helmet-async';

const ContactUs = () => {
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
        <title>Contact Us Page</title>
      </Helmet>
      <SubMainBanner
        bgImg="/assets/contact-us-bg.png"
        title="Contact Us"
        desc="Luxury Vehicle Protection Services For Your Car"
      ></SubMainBanner>
      <SubPageTitle
        type="word"
        title="Contact Us"
        desc="For Your Vehicle Protection Services in North York"
      ></SubPageTitle>
      <ChooseUs></ChooseUs>
      <GoogleMap />
    </motion.main>
  );
};

export default ContactUs;
