import GetAQuoteBanner from 'containers/GetAQuoteBanner/GetAQuoteBanner';
import MainServiceCarousel from 'containers/MainServiceCarousel/MainServiceCarousel';
import ServiceInfo from 'containers/ServiceInfo/ServiceInfo';
import SubMainBanner from 'containers/SubMainBanner/SubMainBanner';
import SubPageTitle from 'containers/SubPageTitle/SubPageTitle';
import { useViewSize } from 'hooks';
import React from 'react';
import { motion } from 'framer-motion';
import GoogleMap from 'containers/GoogleMap/GoogleMap';
import { Helmet } from 'react-helmet-async';

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
      <Helmet>
        <title>Main Services Page</title>
      </Helmet>
      <SubMainBanner
        title="Services"
        desc="Luxury Vehicle Protection Services For Your Car"
        bgImg="assets/mainServiceBannerImage.png"
      />
      <SubPageTitle title="Services" desc="Our Professional Services" />
      {desktop ? (
        <>
          <ServiceInfo
            mode="right"
            imagePath="assets/desktopMainService_01.jpg"
            title="Ceramic Pro"
            imageLabel="Ceramic Pro"
            subTitle="Ceramic Pro / IGL Coatings"
            linkText="Learn More"
            to="/ceramic-coating"
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
            title="Paint Protection Film"
            subTitle="Xpel Ultimate Plus &amp; Stealth"
            imageLabel="Paint Protection FIlm"
            to="/paint-protection"
            linkText="Learn More"
          >
            Paint Protection Film is a virtually invisible urethane layer that
            protects your vehicle’s paint from everyday damages including
            scuffs, scratches, chips, and more.
          </ServiceInfo>

          <ServiceInfo
            mode="right"
            imagePath="assets/desktopMainService_03.png"
            title="Window Tinting"
            subTitle="Xpel Carbon &amp; Ceramic Films"
            imageLabel="Window Tinting"
            to="/window-tinting"
            linkText="Learn More"
          >
            Make your car look better with black tinted windows. Protect
            yourself from 99% harmful cancer causing UV rays &amp; achieve the
            privacy you desire with window tinting.
          </ServiceInfo>

          <ServiceInfo
            mode="left"
            imagePath="assets/desktopMainService_04.png"
            title="Detailing &amp; Paint Correction"
            imageLabel="Detailing &amp; Paint Correction"
            subTitle="Professional Detailing and Paint Correction"
            to="/detailing-and-correction"
            linkText="Learn More"
          >
            Get your car looking like new again with the interior/exterior
            packages we offer. From basic clean up to full detailing.
          </ServiceInfo>

          <ServiceInfo
            mode="right"
            imagePath="assets/desktopMainService_05.png"
            title="Wheels &amp; Tires"
            imageLabel="Wheels &amp; Tires"
            subTitle="From basic to stylish and performing tires and wheels"
            to="/wheel-and-tire"
            linkText="Learn More"
          >
            We work with most brands and can get you the wheels and tires you
            need and want. If you're on a budget, we can get you an alternative
            to the leading brand tire. We also offer all major leading brands
            like Michelin, Bridgestone, Firestone, Pirelli, Yokohama,
            Continental and many more. Contact us today to get your wheels and
            tires package pricing.
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
      <GoogleMap />
    </motion.main>
  );
};

export default MainService;
