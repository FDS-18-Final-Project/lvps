import React from 'react';
import styled from 'styled-components';
import {
  colors,
  fontSizes,
  calcRem,
  calcInterval,
  device
} from '../../theme/theme';
import GetAQuoteForm from 'containers/GetAQuoteForm/GetAQuoteForm';
import Paragraph from 'components/Paragraph/Paragraph';
import { useSelector } from 'react-redux';

const FullContainer = styled.section`
  position: relative;
  //background-color: rgba(45, 45, 45, 0.8);
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    //background-image: url('assets/GetAQuoteBgImage.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .paragraph {
    border-bottom: 1px solid ${colors.lightGray};
    text-align: center;
    padding: ${calcInterval([55, 0])};
    h2 {
      font-size: ${fontSizes.titleLarge};
      font-weight: 800;
      color: ${colors.black};
      line-height: ${calcRem(75)};
    }

    p {
      color: ${colors.black};
      font-size: ${fontSizes.xl};
      font-weight: 700;
    }
  }

  ${device.tablet} {
    .paragraph {
      padding: ${calcInterval([40, 0])};
      h2 {
        font-size: ${fontSizes.xl};
        line-height: ${calcRem(36)};
        font-weight: 800;
      }
      p {
        font-size: ${fontSizes.small};
      }
    }
  }
`;

const GetAQuoteFormSection = () => {
  const selectedService = useSelector(state => state.service);

  const servicesTotalPrice = Object.values(selectedService)
    .flat(Infinity)
    .reduce((acc, cur) => {
      cur.price = !cur.price ? 0 : cur.price;
      return acc + cur.price;
    }, 0);

  return (
    <FullContainer>
      <Paragraph
        id="paragraph"
        className="paragraph"
        title="Get a Quote"
        size={24}
        headingNum={2}
      >
        ${servicesTotalPrice}
      </Paragraph>
      <GetAQuoteForm />
    </FullContainer>
  );
};

export default GetAQuoteFormSection;
