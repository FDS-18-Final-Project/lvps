import React from 'react';
import styled from 'styled-components';
import { calcInterval, calcRem, colors, fontSizes, device } from 'theme/theme';
import { useAccordionState } from 'hooks/';
import { useViewSize } from 'hooks/';
import Paragraph from 'components/Paragraph/Paragraph';
import Icon from 'components/Icon/Icon';
import AccordionList from 'components/AccordionList/AccordionList';

const FullContainer = styled.section``;

const FAQContainer = styled.div`
  max-width: ${calcRem(1200)};
  margin: 0 auto;
  display: grid;
  grid-template: repeat(1, 0.2fr 1fr) / repeat(1, 0.7fr 1fr);

  padding: ${calcInterval([75, 0, 150])};
  grid-gap: 0 10px;

  .gridTitle {
    grid-area: 1 / 1 / 2 / 3;
    margin-bottom: ${calcRem(60)};
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
  ${device.desktop} {
    padding: ${calcInterval([50, 15, 70])};

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

  ${device.tablet} {
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
        padding: ${calcInterval([5, 30, 14])};
      }
      h3 {
        padding: 0;
        font-size: ${fontSizes.small};
        line-height: ${calcRem(27)};
        white-space: initial;
      }
      p {
        margin: 10px;
        font-size: ${calcRem(14)};
      }
    }
  }
`;

const accordionState = [
  {
    id: 1,
    title: 'How much does your services cost?',
    description: `It depends on the service you are looking to get. Every car is different and depending on the services the price varies. Contact us for more information.`,
    active: true
  },
  {
    id: 2,
    title: 'What is your guarantee?',
    description: `We guarantee that the job will be done with the highest quality standards. If for some reason you are not happy with the results lets us know and we will fix it.`,
    active: false
  },
  {
    id: 3,
    title: 'How long do you need my car for the work to be completed?',
    description:
      'Most of the time we need your car for 1-2 full days depending on the services you get. Protection products like ceramic coating, paint protection film, paint correction, require time for the product to be installed and after waiting time for curing.. We want to make sure the job is done right and not rushed.     ',
    active: false
  },
  {
    id: 4,
    title: 'Where are you located?',
    description:
      'We are located on 9 Vanley Cres, North York. We also offer some mobile services. We come to you. Contact us for more information.     ',
    active: false
  },
  {
    id: 5,
    title: 'How long do I wait before washing my car?',
    description:
      'We recommend not to wash your car within the first two weeks. It is the curing period for ceramic coatings, paint protection film. The first wash is on us. Book a time with us after the 2 weeks for the inspection wash. We make sure that everything is installed and working.      ',
    active: false
  },
  {
    id: 6,
    title: 'What car window tint percentage is legal in Ontario?',
    description:
      'In Ontario the legal limit for front side windows is 35%, the back and rear windows can be dark as you wish as there is no limit. You have to choose a shade of darkness that is comfortable and safe to you.     ',
    active: false
  },
  {
    id: 7,
    title: 'What Is Paint Protection Film?',
    description:
      'Paint protection film is a transparent film that adheres to the smooth surfaces of your vehicle. It does not affect the appearance or the aerodynamics of your vehicle. With minimal maintenance, paint protection film can last for many years with minimal maintenance. It looks great while keeping your paint protected. ',
    active: false
  },
  {
    id: 8,
    title: 'Do I Have to Wash My Car Prior To Receiving services?',
    description:
      'It is always recommended that your car is as clean as possible before application. This will allow your installer to assess the aesthetic condition of your car before installation.',
    active: false
  },
  {
    id: 9,
    title: 'How Long Should I Wait Before Washing My Car?',
    description:
      'It is recommended that you wait approximately 48 hours before washing your car so that the film can adhere to the surface of your car. Because the installation is applied wet, it will require some drying time.',
    active: false
  },
  {
    id: 10,
    title: 'Is Paint Protection Film Effective?',
    description:
      'Absolutely! The goal of the film is to not only prevent environmental damage but paint abrasions and scratches.',
    active: false
  },
  {
    id: 11,
    title: 'How Do I Maintain The Film?',
    description:
      'You should do regular washes and annual waxing in order to maintain the lustrous appearance. Ultimately, you should care for it the same way you would care for other painted surfaces.',
    active: false
  },
  {
    id: 12,
    title: 'Can I Have My Whole Vehicle Wrapped In Paint Protection Film?',
    description:
      'Yes. Your car can be fully wrapped on all smooth surfaces, both inside and outside.',
    active: false
  }
];

const variants = mobile => ({
  visible: {
    color: colors.white,
    backgroundColor: colors.black,
    height: mobile ? 'auto' : calcRem(230),
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
              : [
                  'FAQ (Frequently Asked Questions)',
                  <Icon title="message" key="icon" type="message" />
                ]
          }
          headingNum={2}
          colors={{ main: colors.black, sub: colors.redMain }}
          size={15}
          className="gridTitle"
        >
          {mobile ? '' : 'If you want to check our works, press the button.'}
        </Paragraph>

        <div className="gridImage">
          <img src="assets/FAQImage.png" alt="wheelCeramic" />
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
