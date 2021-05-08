// import StealthSignature from 'containers/StealthSignature/StealthSignature';
// import IconKeyFeature from 'containers/IconKeyFeature/IconKeyFeature';
// import ServiceInfoType2 from 'containers/ServiceInfoType2/ServiceInfoType2';
// import SubMainBanner from 'containers/SubMainBanner/SubMainBanner';
// import SubPageTitle from 'containers/SubPageTitle/SubPageTitle';
// import Video from 'containers/Video/Video';
// import PaintProtectionFilmOptions from 'containers/PaintProtectionFilmOptions/PaintProtectionFilmOptions';
// import PaintProtectionFilmPackageOption from 'containers/PaintProtectionFilmPackageOption/PaintProtectionFilmPackageOption';
// import OurWorks from 'containers/OurWorks/OurWorks';
// import GetAQuoteBanner from 'containers/GetAQuoteBanner/GetAQuoteBanner';
// import GoogleMap from 'containers/GoogleMap/GoogleMap';
import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { PPFcarouselImgs } from 'data/Data';
import { Helmet } from 'react-helmet-async';

const GetAQuoteBanner = React.lazy(() =>
  import('containers/GetAQuoteBanner/GetAQuoteBanner')
);
const StealthSignature = React.lazy(() =>
  import('containers/StealthSignature/StealthSignature')
);
const IconKeyFeature = React.lazy(() =>
  import('containers/IconKeyFeature/IconKeyFeature')
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
const PaintProtectionFilmOptions = React.lazy(() =>
  import('containers/PaintProtectionFilmOptions/PaintProtectionFilmOptions')
);
const PaintProtectionFilmPackageOption = React.lazy(() =>
  import(
    'containers/PaintProtectionFilmPackageOption/PaintProtectionFilmPackageOption'
  )
);
const OurWorks = React.lazy(() => import('containers/OurWorks/OurWorks'));

const PaintProtectionFilm = () => {
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
          <title>Paint Protection Film Page</title>
          <meta
            name="description"
            content="Luxury Vehicle Protection Services (LVPS) is a Certified Xpel Paint Protection Film installer. We offer Xpel film products. Xpel Ultimate Plus, Xpel Stealth. We are Paint Protection Film specialists in North York and the GTA (Greater Toronto Area). We have protected many vehicles with PPF (Paint Protection Film). Tesla expert in Paint Protection Film. Often referred to as “PPF,” XPEL Self-Healing Paint Protection Film is perfect for protecting high impact areas, or even doing full coverage car wraps . Keep your paint safe from chips, scratches, and road debris with glossy ULTIMATE PLUS™ or satin finish STEALTH™ today."
          />
        </Helmet>
        <SubMainBanner
          title="Paint Protection Film"
          desc="Luxury Vehicle Protection Services For Your Car"
          bgImg="assets/PaintProtectionBannerImage.png"
        />
        <SubPageTitle
          title="Paint Protection Film"
          desc="Meet Our Quality Services"
        />
        <ServiceInfoType2
          imageLabel="ceramic pro coating bottle"
          imagePath="./assets/paintProtectionServiceInfo.png"
          mobileImagePath="./assets/ServiceInfo_02.png"
          infoList={[]}
          mode="right"
          subTitle=" "
          title="Xpel
        Paint Protection Film
        North York"
        >
          Paint protection film is a thin but exceptionally durable polymer or
          polyurethane film that is the ultimate layer of protection. Not only
          does it keep your ride’s clear coat protected against chemicals, UV
          exposure, acid rain and road debris. If the vehicle’s paint is
          impacted by road debris, it can save you thousands of dollars in auto
          body repairs.
        </ServiceInfoType2>
        <IconKeyFeature />
        <StealthSignature />
        <Video
          videoId="hI4lW8uNRqY"
          videoTitle="paint protection film products"
        />
        <PaintProtectionFilmPackageOption />
        <PaintProtectionFilmOptions />
        <OurWorks contents={PPFcarouselImgs} />
        <GetAQuoteBanner
          title="Get a Free Quote"
          desc="Book Youar Service button link to contact form."
          linkText="Get a Free Quote"
          styledmode="secondary"
          color="red_05"
        />
        <GoogleMap />
      </motion.main>
    </Suspense>
  );
};

export default PaintProtectionFilm;
