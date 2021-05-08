import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
// import GoogleMap from 'containers/GoogleMap/GoogleMap';
// import SubMainBanner from 'containers/SubMainBanner/SubMainBanner';
// import SubPageTitle from 'containers/SubPageTitle/SubPageTitle';
// import ChooseUs from 'containers/ChooseUs/ChooseUs';

const SubMainBanner = React.lazy(() =>
  import('containers/SubMainBanner/SubMainBanner')
);
const SubPageTitle = React.lazy(() =>
  import('containers/SubPageTitle/SubPageTitle')
);
const GoogleMap = React.lazy(() => import('containers/GoogleMap/GoogleMap'));
const ChooseUs = React.lazy(() => import('containers/ChooseUs/ChooseUs'));
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
          <title>Contact Us Page</title>
          <meta
            name="description"
            content="Do not hesitate to message us for your ceramic coating, paint protection film (PPF), window tinting, detailing and paint correction, and wheels and tires. We will protect your investment. We are the paint protection experts for any make and model. We have worked on many luxury vehicles brands such as Tesla, Mercedes Benz, Porsche, Bmw, Audi. "
          />
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
    </Suspense>
  );
};

export default ContactUs;
