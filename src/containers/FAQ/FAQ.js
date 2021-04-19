import React from 'react';
import styled from 'styled-components';
import { calcInterval, calcRem, colors, fontSizes } from 'theme/theme';
import { AccordionList, Icon, Paragraph } from 'components/';
import useAccordionState from '../../hooks/useAccordionState';
import useViewSize from 'hooks/useViewSize';

const FullContainer = styled.section``;

const FAQContainer = styled.div`
  max-width: ${calcRem(1200)};
  margin: 0 auto;
  display: grid;
  grid-template: repeat(1, 0.2fr 1fr) / repeat(1, 0.7fr 1fr);

  padding: ${calcInterval([75, 0, 191])};
  grid-gap: 0 10px;

  .gridTitle {
    grid-area: 1 / 1 / 2 / 3;
    margin-bottom: ${calcRem(104)};
  }

  .gridImage {
    grid-area: 2 / 1 / 3 / 2;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .gridAccordion {
    grid-area: 2 / 2 / 3 / 3;
    a {
      margin-bottom: 0;
    }
  }

  h2 {
    display: flex;
    align-items: center;
    div {
      margin-left: ${calcRem(10)};
    }
  }
  @media only screen and (max-width: 1200px) {
    .gridTitle {
      margin-bottom: 0;
      h2 {
        font-size: ${fontSizes.xxl};
      }

      svg {
        width: ${calcRem(35)};
      }
    }
  }

  @media only screen and (max-width: 768px) {
    grid-template: repeat(1, 1fr) / repeat(1, 1fr);
    padding: ${calcInterval([50, 15])};
    .gridTitle {
      grid-area: 1 / 1 / 2 / 2;
      margin-bottom: ${calcRem(10)};

      h2 {
        display: block;

        width: 100%;
        text-align: center;
      }
    }
    .gridImage {
      display: none;
    }
    .gridAccordion {
      grid-area: 2 / 1 / 3 / 2;
      width: 100%;

      ul {
        width: 100%;
      }
      a {
        padding: ${calcInterval([5, 15, 14])};
      }
      h3 {
        padding: 0;
        font-size: ${fontSizes.small};
        line-height: ${calcRem(27)};
        white-space: initial;
      }
      p {
        margin: 10px;
      }
    }
  }
`;

const accordionState = [
  {
    id: 1,
    title: 'How much does your services cost?',
    description: `It depends on the service you are looking to get. Every car is different and depending on the services the price varies. Contact us for more information.
    `,
    imagePath: 'assets/dummy_ourbestservice.png',
    active: true
  },
  {
    id: 2,
    title: 'What is your guarantee?',
    description: `It can be described as an additional clear coat,
    with 3 times the hardness and self cleaning properties.
    `,
    imagePath: 'assets/dummyCar.png',
    active: false
  },
  {
    id: 3,
    title: 'How long do you need my car for the work to be completed?',
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
    title: 'Where are you located?',
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
    title: 'How long do I wait before washing my car?',
    description: [
      'Quality Protection',
      'ServicesQuality Protection',
      'ServicesQuality Protection',
      'Services'
    ],
    imagePath: 'assets/dummy_car1.png',
    active: false
  },
  {
    id: 6,
    title: 'What car window tint percentage is legal in Ontario??',
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
    id: 7,
    title: 'What Is Paint Protection Film?',
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
    id: 8,
    title: 'Do I Have To Wash My Vehicle Before My Installation Appointment?',
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
    id: 9,
    title: 'After Installation, How Long Should I Wait Before Washing My Car?',
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
    id: 10,
    title: 'Is Paint Protection Film Effective?',
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
    id: 11,
    title: 'How Do I Maintain The Film?',
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

const variants = mobile => ({
  visible: {
    color: colors.white,
    backgroundColor: colors.black,
    height: mobile ? 'auto' : calcRem(200),
    opacity: 0.8,
    transition: { duration: 0.5, type: 'tween' }
  },
  hidden: {
    color: colors.black,
    backgroundColor: colors.lightGray,
    height: mobile ? calcRem(60) : calcRem(50),
    opacity: 1,
    transition: { duration: 0.5, type: 'tween' }
  }
});
const FAQ = () => {
  const [accordionItemList, handleClick] = useAccordionState(accordionState);
  const { mobile } = useViewSize();
  return (
    <FullContainer>
      <FAQContainer>
        <Paragraph
          type="title"
          title={
            mobile
              ? 'FAQ'
              : ['FAQ (Frequently asked questions)', <Icon type="message" />]
          }
          headingNum={2}
          colors={{ main: colors.black, sub: colors.redMain }}
          size={15}
          className="gridTitle"
        >
          {mobile ? '' : 'If you want to check our works, press the button.'}
        </Paragraph>

        <div className="gridImage">
          <img src="assets/dummy_ceramic.png" alt="더미이미지" />
        </div>
        <div className="gridAccordion">
          <AccordionList
            accordion={accordionItemList}
            maxWidth={665}
            handleClick={handleClick}
            variant={variants}
          />
        </div>
      </FAQContainer>
    </FullContainer>
  );
};

export default FAQ;
