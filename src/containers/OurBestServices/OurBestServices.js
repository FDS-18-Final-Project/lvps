import React, { useState } from 'react';
import styled from 'styled-components';
import theme from 'theme/theme';
import Layout from 'pages/Layout/Layout';
import { AccordionList } from 'components/';
import { string } from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

const ServicesWrapper = styled.div`
  padding: ${theme.calcInterval([144, 0])};
  position: relative;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  background-color: rgba(45, 45, 45, 0.8);

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-image: url(${props => props.imagePath});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  h2 {
    font-size: ${theme.fontSizes.titleBase};
    color: ${theme.colors.white};
    width: 100%;
    padding-left: ${theme.calcRem(200)};
    margin-bottom: 60px;
  }

  img {
    width: 100%;
    height: 645px;
    margin-right: 45px;
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
    imagePath: 'assets/dummy_background.png',
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
    <ServicesWrapper imagePath={imagePath}>
      <h2>{title}</h2>
      <Layout.FlexContainer flex={2}>
        <AnimatePresence initial={false}>
          <motion.img
            key={setActiveImage()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 1, transition: { duration: 0.1 } }}
            src={setActiveImage()}
            alt="service"
          />
        </AnimatePresence>
      </Layout.FlexContainer>
      <Layout.FlexContainer flex={1} justify="flex-start">
        <AccordionList
          accordion={accordionItemList}
          handleClick={handleClick}
        />
      </Layout.FlexContainer>
    </ServicesWrapper>
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

ServicesWrapper.displayName = 'ServicesWrapper';
export default OurBestServices;
