import React from 'react';
import styled from 'styled-components';
import { calcInterval, fontSizes, calcRem } from 'theme/theme';
import ServiceInfo from 'containers/ServiceInfo/ServiceInfo';
import Carousel from 'components/Carousel/Carousel';

const FullContainer = styled.div`
  padding: ${calcInterval([70, 15, 25])};
  overflow: hidden;
`;

const MainServiceCarouselContainer = styled(Carousel)`
  section {
    border: none;

    div {
      padding: 0;
    }
  }
  .gridTitle {
    h2 {
      font-size: ${fontSizes.xl};
    }
  }

  .gridParagraph {
    min-height: 170px;
    margin-top: ${calcRem(15)};
    font-size: ${calcRem(14)};
    line-height: ${calcRem(21)};
  }

  .gridImage {
    img {
      height: 100%;
    }
  }
`;

const contents = [
  <ServiceInfo
    mode="left"
    imagePath="assets/ServiceInfo_01.png"
    imageLabel="Ceramic Pro"
    title="Ceramic Pro"
    subTitle="Ceramic Pro / IGL Coatings"
    to="/igl-coatings"
    linkText="Read More"
  >
    Ceramic Pro is a multi-layerable, clear, liquid nano-ceramic coating. When
    cured, this technology will transform itself on the surface to a permanent,
    durable yet flexible glass shield. Ceramic Pro can be described as an
    additional clear coat, with 3 times the hardness and self cleaning
    properties.
  </ServiceInfo>,
  <ServiceInfo
    mode="left"
    imagePath="assets/ServiceInfo_02.png"
    title="Paint Protection FIlm"
    imageLabel="Paint Protection FIlm"
    subTitle="Ceramic Coating"
    to="/paint-protection"
    linkText="Read More"
  >
    Paint Protection Film is a virtually invisible urethane layer that protects
    your vehicle’s paint from everyday damages including scuffs, scratches,
    chips, and more.
  </ServiceInfo>,
  <ServiceInfo
    mode="left"
    imagePath="assets/ServiceInfo_03.png"
    title="Window Tinting"
    imageLabel="Window Tinting"
    subTitle="Ceramic Coating"
    to="/window-tinting"
    linkText="Read More"
  >
    Make your car look better with black tinted windows. Protect yourself from
    99% harmful cancer causing UV rays &amp; achieve the privacy you desire with
    window tinting.
  </ServiceInfo>,
  <ServiceInfo
    mode="left"
    imagePath="assets/ServiceInfo_04.png"
    title="Detailing &amp; Paint Correction"
    imageLabel="Detailing &amp; Paint Correction"
    subTitle="Detailing"
    to="/detailing-and-correction"
    linkText="Read More"
  >
    Get your car back to like when you bought it new with an interior/exterior
    packages we offer. From basic clean up to full detailing.
  </ServiceInfo>,
  <ServiceInfo
    mode="left"
    imagePath="assets/ServiceInfo_05.png"
    imageLabel="Wheel &amp; Tire"
    title="Wheel &amp; Tire"
    subTitle="Ceramic Coating"
    to="wheel-and-tire"
    linkText="Read More"
  >
    We work with most wheel and tires distributors and can get you the wheels
    and tires you need. If you're on a budget, we can get you an alternative to
    the leading brand tire. We also offer all major leading brands like
    Michelin, Bridgestone, Firestone, Pirelli, Yokohama, Continental and many
    more. Contact us today to get your wheels and tires package pricing.
  </ServiceInfo>
];

const MainServiceCarousel = () => {
  return (
    <FullContainer>
      <MainServiceCarouselContainer type="card" contents={contents} />
    </FullContainer>
  );
};

export default MainServiceCarousel;
