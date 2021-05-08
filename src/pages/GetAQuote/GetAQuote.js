// import GetAQuoteCheckbox from 'containers/GetAQuoteCheckbox/GetAQuoteCheckbox';
// import SubMainBanner from 'containers/SubMainBanner/SubMainBanner';
// import SubPageTitle from 'containers/SubPageTitle/SubPageTitle';
import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const SubMainBanner = React.lazy(() =>
  import('containers/SubMainBanner/SubMainBanner')
);
const SubPageTitle = React.lazy(() =>
  import('containers/SubPageTitle/SubPageTitle')
);
const GetAQuoteCheckbox = React.lazy(() =>
  import('containers/GetAQuoteCheckbox/GetAQuoteCheckbox')
);

const GetAQuote = () => {
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
          <title>Get a Quote Page</title>
          <meta
            name="description"
            content="Luxury Vehicle Protection Services (LVPS). Contact us for a quote on services for your car. We work with clients around the GTA. Our services are Ceramic Coating, Paint Protection Film, Window Tinting, Detailing and Paint Correction, and Wheels and Tires. We offer the best quality services and products on the market. Customer satisfaction guaranteed. Price match available for certain products and services. "
          />
        </Helmet>
        <SubMainBanner
          title="GET A QUOTE"
          desc="Luxury Vehicle Protection Services For Your Car"
          bgImg="assets/get-a-quote-bg.png"
        />
        <SubPageTitle title="Get a Quote" desc="Meet Our Quality Services" />
        <GetAQuoteCheckbox />
      </motion.main>
    </Suspense>
  );
};

export default GetAQuote;
