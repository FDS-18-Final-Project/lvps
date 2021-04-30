import React from 'react';
import SubMainBanner from 'containers/SubMainBanner/SubMainBanner';
import BrandList from 'containers/BrandList/BrandList';
import ServiceInfoType2 from 'containers/ServiceInfoType2/ServiceInfoType2';
import GetAQuoteBanner from 'containers/GetAQuoteBanner/GetAQuoteBanner';
import { motion } from 'framer-motion';
import GoogleMap from 'containers/GoogleMap/GoogleMap';
import { tireList, wheelList } from 'data/Data';
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
        <title>Wheels and Tires Page</title>
      </Helmet>
      <SubMainBanner
        bgImg="/assets/wheel-and-tire.png"
        title="Wheels &amp; Tires"
        desc="Luxury Vehicle Protection Services For Your Car"
      ></SubMainBanner>
      <ServiceInfoType2
        title="We offer only Wheels and Tires brands you can trust."
        mode="right"
        imagePath="./assets/wheel-tire-service-banner.png"
        mobileImagePath="./assets/mobile-wheel-tire-service-banner.png"
        imageLabel="Wheel Tire Service Banner Image"
      >
        We work with most wheel and tires distributors and can get you the
        wheels and tires you need. <br />
        <br />
        If you're on a budget, we can get you an alternative to the leading
        brand tire. We also offer all major leading brands like Michelin,
        Bridgestone, Firestone, Pirelli, Yokohama, Continental and many more.
        Contact us today to get your wheels and tires package pricing!!
      </ServiceInfoType2>
      <BrandList
        title="Feature Wheel Brands"
        mode="image"
        size="wheel"
        type="wheel"
        wheelList={wheelList}
      />
      <BrandList
        title="Feature Tire Brands"
        mode="image"
        size="tire"
        type="tire"
        tireList={tireList}
      />
      <GoogleMap />
      <GetAQuoteBanner
        title="Get a Free Quote"
        desc="Book Youar Service button link to contact form."
        linkText="Get a Free Quote"
        styledmode="secondary"
        color="red_05"
      />
    </motion.main>
  );
};

export default ContactUs;
