import CardExplanation from 'containers/CardExplanation/CardExplanation';
import StaffIntroduction from 'containers/StaffIntroduction/StaffIntroduction';
import SubMainBanner from 'containers/SubMainBanner/SubMainBanner';
import GoogleMap from 'containers/GoogleMap/GoogleMap';
import React from 'react';
import { colors } from 'theme/theme';
import { motion } from 'framer-motion';

const CardList = [
  {
    id: 1,
    type: 'square',
    content: [
      {
        id: 1,
        content:
          'We value the quality of the product and services we offer to our clients.'
      }
    ],
    iconType: 'mainGoodLuck',
    background: colors.black,
    fontColor: colors.white
  },
  {
    id: 2,
    type: 'square',
    content: [
      {
        id: 1,
        content: 'Professional installation with the highest quality products.'
      }
    ],
    iconType: 'mainShield',
    background: colors.black,
    fontColor: colors.white
  },
  {
    id: 3,
    type: 'square',
    content: [
      {
        id: 1,
        content: 'Installation of products and services for any make and model.'
      }
    ],
    iconType: 'mainSmile',
    background: colors.black,
    fontColor: colors.white
  },
  {
    id: 4,
    type: 'square',
    content: [
      { id: 1, content: 'Installation guarantee on products and services.' }
    ],
    iconType: 'mainPerson',
    background: colors.black,
    fontColor: colors.white
  },
  {
    id: 5,
    type: 'square',
    content: [{ id: 1, content: 'Pick up & delivery services available.' }],
    iconType: 'mainTruck',
    background: colors.black,
    fontColor: colors.black
  },
  {
    id: 6,
    type: 'square',
    content: [
      {
        id: 1,
        content:
          'When requested, certain mobile services available at your location.'
      }
    ],
    iconType: 'mainCheck',
    background: colors.black,
    fontColor: colors.white
  }
];

const AboutUs = () => {
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
        bgImg="/assets/about-us-bg.png"
        title="About Us"
        desc="Luxury Vehicle Protection Services For Your Car"
      ></SubMainBanner>
      <CardExplanation
        cardList={CardList}
        title="Why Choose Us"
      ></CardExplanation>
      <StaffIntroduction />
      <GoogleMap />
    </motion.main>
  );
};

AboutUs.displayName = 'AboutUs';

export default AboutUs;
