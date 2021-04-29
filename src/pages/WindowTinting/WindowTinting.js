import GetAQuoteBanner from 'containers/GetAQuoteBanner/GetAQuoteBanner';
import GoogleMap from 'containers/GoogleMap/GoogleMap';
import OurWorks from 'containers/OurWorks/OurWorks';
import ServiceInfoType2 from 'containers/ServiceInfoType2/ServiceInfoType2';
import SubMainBanner from 'containers/SubMainBanner/SubMainBanner';
import SubPageTitle from 'containers/SubPageTitle/SubPageTitle';
import Video from 'containers/Video/Video';
import WindowTintingCarbon from 'containers/WindowTintingCarbon/WindowTintingCarbon';
import WindowTintingCeramic from 'containers/WindowTintingCeramic/WindowTintingCeramic';
import { motion } from 'framer-motion';
import React from 'react';
import { windowTintingCarouselImgs } from 'data/Data';

const WindowTinting = () => {
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
        title="Window Tinting"
        desc="Luxury Vehicle Protection Services For Your Car"
        bgImg="assets/WindowTintingBannerImage.png"
      />
      <SubPageTitle
        title="Window Tinting"
        desc="PRIVACY, UV PROTECTION, HEAT REJECTION"
      />
      <Video videoId="BS5vMf381iQ" videoTitle="window tinting products" />
      <ServiceInfoType2
        imageLabel="A Car with Carbon Film applied"
        imagePath="./assets/carbon-film.png"
        mobileImagePath="./assets/mobile-carbon-film.png"
        infoList={[
          '5 Year Warranty',
          'Great solar performance with advanced UV protection',
          'No metal layers to cause interference with cell phone/radio'
        ]}
        subTitle="Non-Metal / Fading, Color Stable, Dyed"
        title="Carbon Film"
      />
      <WindowTintingCarbon />
      <ServiceInfoType2
        imageLabel="A Car with Ceramic Film applied"
        imagePath="./assets/ceramic-film.png"
        mobileImagePath="./assets/mobile-ceramic-film.png"
        infoList={[
          'Lifetime Warranty',
          'Proprietary non-metallized, nonconductive nano-ceramic technology maximizes heat and ultraviolet rejection, keeping you and your vehicle cool and helping to protect from the damaging effects of the sun.'
        ]}
        subTitle="Non-Metal, Maximum Heat Rejection"
        title="Ceramic Film"
      />
      <WindowTintingCeramic />
      <OurWorks contents={windowTintingCarouselImgs} />
      <GetAQuoteBanner
        title="Get a Free Quote"
        desc="Book Youar Service button link to contact form."
        linkText="Get a Free Quote"
        styledmode="secondary"
        color="red_05"
      />
      <GoogleMap />
    </motion.main>
  );
};

export default WindowTinting;
