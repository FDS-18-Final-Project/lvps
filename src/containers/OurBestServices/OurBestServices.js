import React, { useState } from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import { calcInterval, calcRem, colors, fontSizes } from 'theme/theme';
import Layout from 'pages/Layout/Layout';
import { AccordionList } from 'components/';
import { motion, AnimatePresence } from 'framer-motion';

const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${calcInterval([144, 0])};
  position: relative;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  background-color: rgba(45, 45, 45, 0.8);

  div + div {
    margin-left: ${calcRem(45)};
  }
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-image: url(${({ imagePath }) => imagePath});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  h2 {
    font-size: ${fontSizes.titleBase};
    color: ${colors.white};
    width: 100%;
    padding-left: ${calcRem(200)};
    margin-bottom: ${calcRem(60)};
  }

  img {
    width: 100%;
    height: ${calcRem(645)};
    transition: 0.4s;
  }
`;

const accordionState = [
  {
    id: 1,
    title: 'Ceramic Coating',
    description: [
      'Quality Protection',
      'ServicesQuality Protection',
      'ServicesQuality Protection',
      'Services'
    ],
    imagePath: 'assets/dummy_ourbestservice.png',
    active: true
  },
  {
    id: 2,
    title: 'Paint Protection Film',
    description: [
      'Quality Protection',
      'ServicesQuality Protection',
      'ServicesQuality Protection',
      'Services'
    ],
    imagePath: 'assets/dummyCar.png',
    active: false
  },
  {
    id: 3,
    title: 'Window Tinting',
    description: [
      'Quality Protection',
      'ServicesQuality Protection',
      'ServicesQuality Protection',
      'Services'
    ],
    imagePath: 'assets/dummyImage.png',
    active: false
  },
  {
    id: 4,
    title: 'Detail Correction',
    description: [
      'Quality Protection',
      'ServicesQuality Protection',
      'ServicesQuality Protection',
      'Services'
    ],
    imagePath: 'assets/dummy_background.png',
    active: false
  },
  {
    id: 5,
    title: 'Ceramic Coating',
    description: [
      'Quality Protection',
      'ServicesQuality Protection',
      'ServicesQuality Protection',
      'Services'
    ],
    imagePath: 'assets/dummy_car1.png',
    active: false
  }
];

const OurBestServices = ({ title, imagePath }) => {
  const [accordionItemList, setAccordionItemList] = useState(accordionState);

  const handleClick = id => {
    setAccordionItemList(
      accordionItemList.map(item =>
        item.id === id ? { ...item, active: true } : { ...item, active: false }
      )
    );
  };

  const setActiveImage = () => {
    return accordionItemList.find(item => item.active).imagePath;
  };

  return (
    <ServicesContainer imagePath={imagePath}>
      <h2>{title}</h2>
      <AnimatePresence initial={false}>
        <Layout.FlexContainer flex={2}>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1
            }}
            key={setActiveImage()}
            src={setActiveImage()}
            alt="service"
          />
        </Layout.FlexContainer>
      </AnimatePresence>
      <Layout.FlexContainer flex={1} justifyContent="flex-start">
        <AccordionList
          accordion={accordionItemList}
          handleClick={handleClick}
        />
      </Layout.FlexContainer>
    </ServicesContainer>
  );
};

OurBestServices.propTypes = {
  title: string,
  imagePath: string
};

OurBestServices.defaultProps = {
  title: 'Our Best Services',
  imagePath: 'assets/dummy_ourbestservice.png'
};

ServicesContainer.displayName = 'ServicesWrapper';
export default OurBestServices;
