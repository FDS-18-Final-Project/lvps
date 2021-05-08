import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { tireList, wheelList } from 'data/Data';
import { Helmet } from 'react-helmet-async';
// import SubMainBanner from 'containers/SubMainBanner/SubMainBanner';
// import BrandList from 'containers/BrandList/BrandList';
// import ServiceInfoType2 from 'containers/ServiceInfoType2/ServiceInfoType2';
// import GetAQuoteBanner from 'containers/GetAQuoteBanner/GetAQuoteBanner';
// import GoogleMap from 'containers/GoogleMap/GoogleMap';

const SubMainBanner = React.lazy(() =>
  import('containers/SubMainBanner/SubMainBanner')
);
const BrandList = React.lazy(() => import('containers/BrandList/BrandList'));
const GoogleMap = React.lazy(() => import('containers/GoogleMap/GoogleMap'));
const ServiceInfoType2 = React.lazy(() =>
  import('containers/ServiceInfoType2/ServiceInfoType2')
);
const GetAQuoteBanner = React.lazy(() =>
  import('containers/GetAQuoteBanner/GetAQuoteBanner')
);

const ContactUs = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
          <meta
            name="description"
            content="Luxury Vehicle Protection Services (LVPS) is an expert for Wheels and Tires in North York and GTA (Greater Toronto Area) We offer wheels and tires for all makes and models. Wheels and Tires Package for summer or winter. Winter tires package for all makes and models. Summer tires package for all makes and models. Summer tire, Winter Tires, All Season tires, All Weather tires. Wheels and Rims for summer, winter, or all seasons. Popular wheel brands like Fast Wheels, DAI Wheels, Replika Wheels, Art Wheels. Popular tires brands like Michelin, Continental, Bridgestone, Goodyear, Pirelli, Kumho, Hankook, Firestone. "
          />
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
    </Suspense>
  );
};

export default ContactUs;
