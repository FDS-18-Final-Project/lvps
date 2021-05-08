// import CarCareGuide from 'containers/CarCareGuide/CarCareGuide';
// import FeaturesBenefits from 'containers/FeaturesBenefits/FeaturesBenefits';
// import GetAQuoteBanner from 'containers/GetAQuoteBanner/GetAQuoteBanner';
// import IGLProtectionProducts from 'containers/IGLProtectionProducts/IGLProtectionProducts';
// import ServiceInfoType2 from 'containers/ServiceInfoType2/ServiceInfoType2';
// import SubMainBanner from 'containers/SubMainBanner/SubMainBanner';
// import SubPageTitle from 'containers/SubPageTitle/SubPageTitle';
// import A11yHidden from 'components/A11yHidden/A11yHidden.styled';
// import GoogleMap from 'containers/GoogleMap/GoogleMap';
// import Video from 'containers/Video/Video';
import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const A11yHidden = React.lazy(() =>
  import('components/A11yHidden/A11yHidden.styled')
);
const CarCareGuide = React.lazy(() =>
  import('containers/CarCareGuide/CarCareGuide')
);
const FeaturesBenefits = React.lazy(() =>
  import('containers/FeaturesBenefits/FeaturesBenefits')
);
const GetAQuoteBanner = React.lazy(() =>
  import('containers/GetAQuoteBanner/GetAQuoteBanner')
);
const IGLProtectionProducts = React.lazy(() =>
  import('containers/IGLProtectionProducts/IGLProtectionProducts')
);
const ServiceInfoType2 = React.lazy(() =>
  import('containers/ServiceInfoType2/ServiceInfoType2')
);
const SubMainBanner = React.lazy(() =>
  import('containers/SubMainBanner/SubMainBanner')
);
const SubPageTitle = React.lazy(() =>
  import('containers/SubPageTitle/SubPageTitle')
);
const GoogleMap = React.lazy(() => import('containers/GoogleMap/GoogleMap'));
const Video = React.lazy(() => import('containers/Video/Video'));

const IGLCoatings = () => {
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
          <title>IGL Coating Page</title>
          <meta
            name="description"
            content="Luxury Vehicle Protection Services (LVPS) is a Certified IGL Coatings Installer. We offer the new and improved Graphene Reinforced Ecocoat Kenzo which has increased durability of up to 5 years. We are Ceramic Coating specialists in North York and in the GTA  (Greater Toronto Area). We have coated and protected many vehicles. Tesla expert in Ceramic Coating Igl Coatings. "
          />
        </Helmet>
        <A11yHidden as="h2">IGL Coating page</A11yHidden>
        <SubMainBanner
          bgImg="/assets/IGLCar.png"
          title="Ceramic Coating"
          desc="Luxury Vehicle Protection Services For Your Car"
        />
        <SubPageTitle
          type="img"
          imagePath="/assets/IGLLogo.png"
          title="IGL logo"
          desc="IGL Coatings"
        />
        <ServiceInfoType2
          mode="right"
          title="FOR THOSE SEEKING THE NEXT-GEN TECH IN ULTIMATE VEHICLE SURFACE PROTECTION"
          imagePath="/assets/IGLCard.png"
          mobileImagePath="/assets/IGLMobileCard.png"
        >
          Kenzo is a revolutionary paint protection coating that contains 100%
          silica providing the highest level of gloss and protection and is
          backed by an official warranty provided by IGL Coatings and supported
          by certified IGL Coatings Master Applicator. It forms a layer of thick
          coating that radiates a rich and natural glow reminiscence of a
          bespoke wax while providing unmatched protection. Running your hands
          across a Kenzo coated car is like touching the soft luxurious silk. It
          will never be the same again.
        </ServiceInfoType2>
        <FeaturesBenefits />
        <ServiceInfoType2
          mode="left"
          iconcolor="green"
          title="Benefits of having a KENZO IGL Coating include"
          imagePath="/assets/KENZO.png"
          mobileImagePath="/assets/IGLMobileCard2.png"
          infoList={[
            'Never wax your vehicle again',
            'Installed by Professional Auto Detailing Experts',
            'Easier to wash and keep clean',
            'Hydrophobic, water repels off easily and quickly creating  a self cleaning effect',
            'Strong resistance to bug etching, sap, and bird droppings.',
            'Scratch resistance. IGL Coatings have been independently tested at "Greater than 9H" hardness  levels',
            'Scratch resistance. IGL Coatings have been independently tested at "Greater than 9H" hardness  levels'
          ]}
        />
        <Video videoId="Eg4hRA60YpI" videoTitle="igl ceramic coating product" />
        <IGLProtectionProducts />
        <CarCareGuide />
        <ServiceInfoType2
          mode="right"
          title="IGL COATINGS™ LEATHER AND FABRIC MAINTENANCE PROGRAM"
          imagePath="/assets/IGLLeather.png"
          mobileImagePath="/assets/IGLMobileCard3.png"
          paddingBottom={58}
        >
          For best results, clean all leather/vinyl surfaces bi-weekly with IGL
          Ecoclean Interior and Ecoshine Leather to avoid contaminant buildup
          and replenish the natural oils. Vacuum carpets regularly and use IGL
          Ecocoat Fabric when necessary. Immediately wipe off spills on leather,
          vinyl, or fabric.
        </ServiceInfoType2>
        <GetAQuoteBanner
          title={
            <>
              Didn’t find what you are looking for? <br />
              Contact us!
            </>
          }
          color="green"
          linkText="Contact us!"
          styledmode="secondary"
          borderColor="green"
          hoverColor="green"
          iconcolor="green"
          width={273}
          to="/contact-us"
        />
        <GoogleMap />
      </motion.main>
    </Suspense>
  );
};

export default IGLCoatings;
