import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

// import A11yHidden from 'components/A11yHidden/A11yHidden.styled';
// import FAQ from 'containers/FAQ/FAQ';
// import GetAQuoteBanner from 'containers/GetAQuoteBanner/GetAQuoteBanner';
// import GoogleMap from 'containers/GoogleMap/GoogleMap';
// import SubMainBanner from 'containers/SubMainBanner/SubMainBanner';

const SubMainBanner = React.lazy(() =>
  import('containers/SubMainBanner/SubMainBanner')
);
const GetAQuoteBanner = React.lazy(() =>
  import('containers/GetAQuoteBanner/GetAQuoteBanner')
);
const GoogleMap = React.lazy(() => import('containers/GoogleMap/GoogleMap'));
const A11yHidden = React.lazy(() =>
  import('components/A11yHidden/A11yHidden.styled')
);
const FAQ = React.lazy(() => import('containers/FAQ/FAQ'));

const FAQPage = () => {
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
          <title>FAQ Page</title>
          <meta
            name="description"
            content="Luxury Vehicle Protection Services (LVPS) provides professional paint protections services for your car. Do not hesitate to contact us if you have any questions about our services. Check our FAQ to find common questions and answers about paint protection services for your car. If you cannot find an answer, please contact us by phone, text, or email. We will be happy to answer all your questions."
          />
        </Helmet>
        <A11yHidden as="h2">FAQ page</A11yHidden>
        <SubMainBanner
          bgImg="/assets/FAQBannerImg.png"
          title="FAQ"
          desc="Luxury Vehicle Protection Services For Your Car"
        />
        <FAQ />
        <GetAQuoteBanner
          title="Question is not listed above?"
          color="red_05"
          linkText="Press here to contact us!"
          styledmode="secondary"
          width={300}
          to="/contact-us"
        />
        <GoogleMap />
      </motion.main>
    </Suspense>
  );
};

export default FAQPage;
