import GetAQuoteBanner from 'containers/GetAQuoteBanner/GetAQuoteBanner';
import MainServiceCarousel from 'containers/MainServiceCarousel/MainServiceCarousel';
import ServiceInfo from 'containers/ServiceInfo/ServiceInfo';
import SubMainBanner from 'containers/SubMainBanner/SubMainBanner';
import SubPageTitle from 'containers/SubPageTitle/SubPageTitle';
import { useViewSize } from 'hooks';
import React from 'react';
import { motion } from 'framer-motion';

const MainService = () => {
  const { desktop } = useViewSize();
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
        title="Services"
        desc="LVS Services for your car"
        bgImg="assets/mainServiceBannerImage.png"
      />
      <SubPageTitle title="Our Services" desc="Meet Our Quality Services" />
      {desktop ? (
        <>
          <ServiceInfo
            mode="right"
            imagePath="assets/desktopMainService_01.png"
            title="Ceramic Pro"
            subTitle="Ceramic Pro / IGL Coatings"
            linkText="Read More"
          >
            Ceramic Pro is a multi-layerable, clear, liquid nano-ceramic
            coating. When cured, this technology will transform itself on the
            surface to a permanent, durable yet flexible glass shield. Ceramic
            Pro can be described as an additional clear coat, with 3 times the
            hardness and self cleaning properties.
          </ServiceInfo>

          <ServiceInfo
            mode="left"
            imagePath="assets/desktopMainService_02.png"
            title="Paint Protection FIlm"
            subTitle="Ceramic Coating"
            linkText="Read More"
          >
            Paint Protection Film is a virtually invisible urethane layer that
            protects your vehicle’s paint from everyday damages including
            scuffs, scratches, chips, and more.
          </ServiceInfo>

          <ServiceInfo
            mode="right"
            imagePath="assets/desktopMainService_03.png"
            title="Window Tinting"
            subTitle="Ceramic Coating"
            linkText="Read More"
          >
            Make your car look better with black tinted windows. Protect
            yourself from 99% harmful cancer causing UV rays & achieve the
            privacy you desire with window tinting.
          </ServiceInfo>

          <ServiceInfo
            mode="left"
            imagePath="assets/desktopMainService_04.png"
            title="Detailing & Paint Correction"
            subTitle="Meet Our Skilled Crew."
            linkText="Read More"
          >
            Get your car back to like when you bought it new with an
            interior/exterior packages we offer. From basic clean up to full
            detailing.
          </ServiceInfo>

          <ServiceInfo
            mode="right"
            imagePath="assets/desktopMainService_05.png"
            title="Wheel & Tire"
            subTitle="Ceramic Coating"
            linkText="Read More"
          >
            We work with most wheel and tires distributors and can get you the
            wheels and tires you need. If you're on a budget, we can get you an
            alternative to the leading brand tire. We also offer all major
            leading brands like Michelin, Bridgestone, Firestone, Pirelli,
            Yokohama, Continental and many more. Contact us today to get your
            wheels and tires package pricing.
          </ServiceInfo>
        </>
      ) : (
        <MainServiceCarousel />
      )}
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

export default MainService;
