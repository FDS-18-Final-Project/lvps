import React from 'react';
import styled from 'styled-components';
import { calcInterval, calcRem, colors, fontSizes, device } from 'theme/theme';
import { useAccordionState } from 'hooks/';
import { useViewSize } from 'hooks/';
import Paragraph from 'components/Paragraph/Paragraph';
import Icon from 'components/Icon/Icon';
import AccordionList from 'components/AccordionList/AccordionList';
import { FAQAccordionState } from 'data/Data';

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
  const [accordionItemList, handleClick] = useAccordionState(FAQAccordionState);
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
