import AccordionItem from 'components/AccodionItem/AccordionItem';
import { array } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const AccordionWrapper = styled.ul`
  li + li {
    margin-top: 5px;
  }
`;

// const accordionState = [
//   {
//     id: 1,
//     title: 'Ceramic Coating',
//     description: [
//       'Quality Protection',
//       'ServicesQuality Protection',
//       'ServicesQuality Protection',
//       'Services'
//     ],
//     imagePath: 'assets/dummy_ourbestservice.png',
//     active: true
//   },
//   {
//     id: 2,
//     title: 'Paint Protection Film',
//     description: [
//       'Quality Protection',
//       'ServicesQuality Protection',
//       'ServicesQuality Protection',
//       'Services'
//     ],
//     imagePath: 'assets/dummyCar.png',
//     active: false
//   },
//   {
//     id: 3,
//     title: 'Window Tinting',
//     description: [
//       'Quality Protection',
//       'ServicesQuality Protection',
//       'ServicesQuality Protection',
//       'Services'
//     ],
//     imagePath: 'assets/dummyImage.png',
//     active: false
//   },
//   {
//     id: 4,
//     title: 'Detail Correction',
//     description: [
//       'Quality Protection',
//       'ServicesQuality Protection',
//       'ServicesQuality Protection',
//       'Services'
//     ],
//     imagePath: 'assets/dummy_background.png',
//     active: false
//   },
//   {
//     id: 5,
//     title: 'Ceramic Coating',
//     description: [
//       'Quality Protection',
//       'ServicesQuality Protection',
//       'ServicesQuality Protection',
//       'Services'
//     ],
//     imagePath: 'assets/dummy_background.png',
//     active: false
//   }
// ];

const AccordionList = ({ accordion, handleClick }) => {
  return (
    <AccordionWrapper>
      {accordion.map(item => (
        <AccordionItem key={item.id} item={item} onClick={handleClick} />
      ))}
    </AccordionWrapper>
  );
};

AccordionList.propTypes = {
  accordion: array
};

AccordionList.defaultProps = {
  //accordion: accordionState
};

AccordionWrapper.displayName = 'AccordionWrapper';

export default AccordionList;
