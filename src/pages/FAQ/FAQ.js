import A11yHidden from 'components/A11yHidden/A11yHidden.styled';
import FAQ from 'containers/FAQ/FAQ';
import GetAQuoteBanner from 'containers/GetAQuoteBanner/GetAQuoteBanner';
import GoogleMap from 'containers/GoogleMap/GoogleMap';
import SubMainBanner from 'containers/SubMainBanner/SubMainBanner';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const FAQPage = () => {
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
        <title>FAQ Page</title>
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
  );
};

export default FAQPage;
