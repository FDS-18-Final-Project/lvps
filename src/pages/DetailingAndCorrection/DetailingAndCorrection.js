import React, { Suspense } from 'react';
import {
  paintCorrectionInfoList,
  paintCorrectionCarouselImgs
} from 'data/Data';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
// import SubMainBanner from 'containers/SubMainBanner/SubMainBanner';
// import SubPageTitle from 'containers/SubPageTitle/SubPageTitle';
// import ServiceInfoType2 from 'containers/ServiceInfoType2/ServiceInfoType2';
// import ServiceInfoType3 from 'containers/ServiceInfoType3/ServiceInfoType3';
// import DetailingPaintPackage from 'containers/DetailingPaintPackage/DetailingPaintPackage';
// import OurWorks from 'containers/OurWorks/OurWorks';
// import GetAQuoteBanner from 'containers/GetAQuoteBanner/GetAQuoteBanner';
// import GoogleMap from 'containers/GoogleMap/GoogleMap';

const SubMainBanner = React.lazy(() =>
  import('containers/SubMainBanner/SubMainBanner')
);
const SubPageTitle = React.lazy(() =>
  import('containers/SubPageTitle/SubPageTitle')
);
const GoogleMap = React.lazy(() => import('containers/GoogleMap/GoogleMap'));
const ServiceInfoType2 = React.lazy(() =>
  import('containers/ServiceInfoType2/ServiceInfoType2')
);
const ServiceInfoType3 = React.lazy(() =>
  import('containers/ServiceInfoType3/ServiceInfoType3')
);
const DetailingPaintPackage = React.lazy(() =>
  import('containers/DetailingPaintPackage/DetailingPaintPackage')
);
const OurWorks = React.lazy(() => import('containers/OurWorks/OurWorks'));
const GetAQuoteBanner = React.lazy(() =>
  import('containers/GetAQuoteBanner/GetAQuoteBanner')
);

const DetailingAndCorrection = () => {
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
          <title>Detailing and Paint Correction Page</title>
          <meta
            name="description"
            content="Luxury Vehicle Protection Services (LVPS) is a certified Detailing & Paint Correction Specialists. We offer from basic to full detail packages in North York and GTA (Greater Toronto Area). Paint correction specialist in North York and GTA. "
          />
        </Helmet>
        <SubMainBanner
          bgImg="/assets/wheel-and-tire.png"
          title="Detailing &amp; Paint Correction"
          desc="Luxury Vehicle Protection Services For Your Car"
        ></SubMainBanner>
        <SubPageTitle
          type="word"
          title="Detailing &amp; Paint Correction"
          desc="Meet Our Quality Services"
        ></SubPageTitle>

        <ServiceInfoType2
          title="Professional Detailing &amp; Paint Correction Services In North York"
          mode="right"
          imagePath="/assets/detail-paint-correction.png"
          mobileImagePath="/assets/mobile-detailing-paint-correction.png"
          imageLabel="a car with Detailing and Paint Correction applied"
        >
          Professional detailing &amp; paint correction services are guaranteed
          to make your car look like new again at LVPS. Therefore, let us do the
          work for you, and as a result you will have guaranteed high quality
          results from any of our detailing and paint correction packages. In
          addition, we treat every vehicle like it's our own as we know that
          your vehicle is very important to you. In conclusion, do not hesitate
          to contact us today and let us do our magic touch on your car.
        </ServiceInfoType2>
        <DetailingPaintPackage />
        <ServiceInfoType3
          title="We are EXPERTS AT PAINT CORRECTION AND POLISHING"
          para1="Polishing the vehicles paint permanently removes swirls and scratches. Don't get fooled with filers and waxes filling the scratches for a short period of time. After a few washes it wears off and all the scratches and swirls come back. We are trained to properly polish and correct the paint before any paint protection application. It can be hard to see all the scratches, swirls marks on your car. You can see it under special lighting like under the sunlight. Silicon free compounds must be used with a polishing machine to correct your car's paint clear coat."
          para2="1 Stage Polish to correct minor scratches and swirls starting from $300. Additional stages may be required for paint that has more scratches and swirls."
          subTitle="Paint correction for the following"
          imagePath="./assets/paint-correction-and-polishing.png"
          imageLabel="Paint Correction And Polishing"
          infoList={paintCorrectionInfoList}
        ></ServiceInfoType3>
        <OurWorks contents={paintCorrectionCarouselImgs}></OurWorks>
        <GetAQuoteBanner></GetAQuoteBanner>
        <GoogleMap />
      </motion.main>
    </Suspense>
  );
};

export default DetailingAndCorrection;
