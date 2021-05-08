import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { aboutUsCardList } from 'data/Data';
import { Helmet } from 'react-helmet-async';
// import CardExplanation from 'containers/CardExplanation/CardExplanation';
// import StaffIntroduction from 'containers/StaffIntroduction/StaffIntroduction';
// import SubMainBanner from 'containers/SubMainBanner/SubMainBanner';
// import GoogleMap from 'containers/GoogleMap/GoogleMap';

const CardExplanation = React.lazy(() =>
  import('containers/CardExplanation/CardExplanation')
);
const StaffIntroduction = React.lazy(() =>
  import('containers/StaffIntroduction/StaffIntroduction')
);
const SubMainBanner = React.lazy(() =>
  import('containers/SubMainBanner/SubMainBanner')
);
const GoogleMap = React.lazy(() => import('containers/GoogleMap/GoogleMap'));

const AboutUs = () => {
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
          <title>About Us Page</title>
          <meta
            name="description"
            content="Luxury Vehicle Protection Services (LVPS). We offer professional quality services and products specializing in ceramic coating, paint protection film, window tinting, detailing & paint correction, and wheels & tires. We are working with customers all over the Greater Toronto Area. Our shop is located in North York. "
          />
        </Helmet>
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
    </Suspense>
  );
};

AboutUs.displayName = 'AboutUs';

export default AboutUs;
