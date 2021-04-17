import { Paragraph } from 'components/';
import GetAQuoteForm from 'containers/GetAQuoteForm/GetAQuoteForm';
import React from 'react';
import styled from 'styled-components';
import { colors, fontSizes, calcRem, calcInterval } from '../../theme/theme';

const FullContainer = styled.section`
  position: relative;
  background-color: rgba(45, 45, 45, 0.8);
  padding-bottom: ${calcRem(21)};
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-image: url('assets/dummy_ourbestservice.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .paragraph {
    border-bottom: 1px solid ${colors.lightGray};
    text-align: center;
    padding: ${calcInterval([55, 0, 74])};
    margin-bottom: ${calcRem(39)};
    h2 {
      font-size: ${fontSizes.titleLarge};
      font-weight: 800;
      color: ${colors.white};
      line-height: ${calcRem(75)};
    }

    p {
      color: ${colors.white};
      font-size: ${fontSizes.xl};
      font-weight: 700;
    }
  }
`;

const GetAQuoteFormSection = () => {
  return (
    <FullContainer>
      <Paragraph
        className="paragraph"
        title="Get a quote"
        size={24}
        headingNum={2}
      >
        Meet Our Quality Services
      </Paragraph>
      <GetAQuoteForm />
    </FullContainer>
  );
};

export default GetAQuoteFormSection;
