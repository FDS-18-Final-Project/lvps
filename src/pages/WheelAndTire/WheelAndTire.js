import React from 'react';
import SubMainBanner from 'containers/SubMainBanner/SubMainBanner';
import BrandList from 'containers/BrandList/BrandList';
import ServiceInfoType2 from 'containers/ServiceInfoType2/ServiceInfoType2';
import GetAQuoteBanner from 'containers/GetAQuoteBanner/GetAQuoteBanner';
import { motion } from 'framer-motion';

const tireList = [
  {
    id: 'tire_01',
    value: 'beyern',
    src: 'assets/img/tire_beyern.png'
  },
  {
    id: 'tire_02',
    value: 'blackrhino',
    src: 'assets/img/tire_blackrhino.png'
  },
  {
    id: 'tire_03',
    value: 'enkei',
    src: 'assets/img/tire_enkei.png'
  },
  {
    id: 'tire_04',
    value: 'fastwheels',
    src: 'assets/img/tire_fastwheels.png'
  },
  {
    id: 'tire_05',
    value: 'hre',
    src: 'assets/img/tire_hre.png'
  },
  {
    id: 'tire_06',
    value: 'vorsteiner',
    src: 'assets/img/tire_vorsteiner.png'
  },
  {
    id: 'tire_07',
    value: 'gts',
    src: 'assets/img/tire_gts.png'
  },
  {
    id: 'tire_08',
    value: 'superspeed',
    src: 'assets/img/tire_superspeed.png'
  },
  {
    id: 'tire_09',
    value: 'mandrus',
    src: 'assets/img/tire_mandrus.png'
  },
  {
    id: 'tire_10',
    value: 'tirerays',
    src: 'assets/img/tire_rays.png'
  },
  {
    id: 'tire_11',
    value: 'replica',
    src: 'assets/img/tire_replika.png'
  },
  {
    id: 'tire_12',
    value: 'rotiform',
    src: 'assets/img/tire_rotiform.png'
  },
  {
    id: 'tire_13',
    value: 'sparco',
    src: 'assets/img/tire_sparco.png'
  },
  {
    id: 'tire_14',
    value: 'superspeedCircle',
    src: 'assets/img/tire_superspeedCircle.png'
  }
];

const wheelList = [
  {
    id: 'wheel_01',
    value: 'wheel_bfgoodrich',
    src: 'assets/img/wheel_bfgoodrich.png'
  },
  {
    id: 'wheel_02',
    value: 'wheel_bridgestone',
    src: 'assets/img/wheel_bridgestone.png'
  },
  {
    id: 'wheel_03',
    value: 'wheel_continental',
    src: 'assets/img/wheel_continental.png'
  },
  {
    id: 'wheel_04',
    value: 'wheel_dunlop',
    src: 'assets/img/wheel_dunlop.png'
  },
  {
    id: 'wheel_05',
    value: 'wheel_yokohama',
    src: 'assets/img/wheel_yokohama.png'
  },
  {
    id: 'wheel_06',
    value: 'wheel_pirelli',
    src: 'assets/img/wheel_pirelli.png'
  },
  {
    id: 'wheel_07',
    value: 'wheel_generaltire',
    src: 'assets/img/wheel_generaltire.png'
  },
  {
    id: 'wheel_08',
    value: 'wheel_gislaved',
    src: 'assets/img/wheel_gislaved.png'
  },
  {
    id: 'wheel_09',
    value: 'wheel_gislaved',
    src: 'assets/img/wheel_gislaved.png'
  },
  {
    id: 'wheel_10',
    value: 'wheel_hankook',
    src: 'assets/img/wheel_hankook.png'
  },
  {
    id: 'wheel_11',
    value: 'wheel_uniroyal',
    src: 'assets/img/wheel_uniroyal.png'
  },
  {
    id: 'wheel_12',
    value: 'wheel_rovelo',
    src: 'assets/img/wheel_rovelo.png'
  },
  {
    id: 'wheel_13',
    value: 'wheel_kapsen',
    src: 'assets/img/wheel_kapsen.png'
  },
  {
    id: 'wheel_14',
    value: 'wheel_kumhotire',
    src: 'assets/img/wheel_kumhotire.png'
  },
  {
    id: 'wheel_15',
    value: 'wheel_michelin',
    src: 'assets/img/wheel_michelin.png'
  },
  {
    id: 'wheel_16',
    value: 'wheel_maxxis',
    src: 'assets/img/wheel_maxxis.png'
  },
  {
    id: 'wheel_17',
    value: 'wheel_nexen',
    src: 'assets/img/wheel_nexen.png'
  },
  {
    id: 'wheel_18',
    value: 'wheel_toyotires',
    src: 'assets/img/wheel_toyotires.png'
  }
];
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
      <SubMainBanner
        bgImg="/assets/wheel-and-tire.png"
        title="Wheel &amp; Tire"
        desc="MM Auto Care For Your Car"
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
