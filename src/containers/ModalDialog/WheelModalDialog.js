import React from 'react';
import styled from 'styled-components';
import { colors, calcRem } from 'theme/theme';
import { Button, A11yHidden, Icon } from 'components';
import { BrandList } from 'containers';
import Portal from 'utils/portal';

const cermicProData = {
  label: 'Ceramic Pro Product Options',
  title: 'Ceramic Pro Product ModalDialog',
  firstPackage: {
    title: 'Ceramic Pro Protection Packages',
    contents: [
      {
        option: 'Gold',
        price: '1499',
        info: [
          {
            id: 1,
            title: '4 Layers Ceramic Pro 9H',
            description: 'on all painted surfaces and trim'
          },
          {
            id: 2,
            title: '1 Layer of Ceramic Pro Top Coat',
            description: 'on all painted surfaces and trim.'
          },
          {
            id: 3,
            title: '1 Layer of Ceramic Pro Glass',
            description: 'on all glass surfaces.'
          },
          {
            id: 4,
            title: '1 Layer of Ceramic Pro Wheel and Caliper',
            description: 'on the face of the wheels.'
          }
        ]
      },
      {
        option: 'Silver',
        price: '899',
        info: [
          {
            id: 1,
            title: '1 Layers of Ceramic Pro 9H',
            description: 'on all painted surfaces and trim'
          },
          {
            id: 2,
            title: '1 Layer of Ceramic Pro Top Coat',
            description: 'on all painted surfaces and trim.'
          },
          {
            id: 3,
            title: '1 Layer of Ceramic Pro Glass',
            description: 'on all glass surfaces.'
          },
          {
            id: 4,
            title: '1 Layer of Ceramic Pro Wheel and Caliper',
            description: 'on the face of the wheels.'
          }
        ]
      },
      {
        option: 'Bronze',
        price: '599',
        info: [
          {
            id: 1,
            title: '1 Layer of Ceramic Pro Top Coat',
            description: 'on all painted surfaces and trim.'
          },
          {
            id: 2,
            title: '1 Layer of Ceramic Pro Glass',
            description: 'on all glass surfaces.'
          },
          {
            id: 3,
            title: '1 Layer of Ceramic Pro Wheel and Caliper',
            description: 'on the face of the wheels.'
          }
        ]
      }
    ]
  },
  secondPackage: {
    title: 'Ceramic Pro Protection Additional Options',
    contents: [
      {
        color: 'black',
        price: '199',
        heading: 'GLASS',
        mode: 'list',
        info: ['2 Layers of "Glass" on all glass and mirrors.']
      },
      {
        color: 'black',
        price: '399',
        heading: 'WHEELS & CALIPERS PROTECTION',
        info: ['1 Layer of “Wheel & Caliper” on Wheels & Calipers.']
      },
      {
        color: 'black',
        price: '599',
        heading: 'INTERIOR PROTECTION',
        info: [
          '1 Coat of "Leather" on the high traffic area and "Textile" on the carpet floor.'
        ]
      }
    ]
  },
  thirdPackage: {
    title: 'IGL Coatings',
    priceTableType: 'helmetPriceTable',
    contents: [
      {
        color: 'green',
        price: '400',
        heading: 'IGL POLY',
        info: [
          'Premium high solids silica coating',
          '8H hardness',
          'Ultimate gloss & shine',
          'Repels water, oil & dirt',
          'Extremely durable lasting up to 1 year'
        ]
      },
      {
        color: 'green',
        price: '600',
        heading: 'IGL QUARTZ',
        info: [
          'Premium high solids silica coating',
          '9H hardness',
          'Ultimate gloss & shine',
          'Repels water, oil & dirt',
          'Extremely durable lasting up to 2 years'
        ]
      },
      {
        color: 'green',
        price: '800',
        heading: 'IGL QUARTZ+',
        info: [
          'Premium high solids silica coating',
          '9H hardness with improved chemical resistance',
          'Ultimate gloss & shine',
          'Repels water, oil & dirt',
          'Extremely durable lasting up to 3 years'
        ]
      },
      {
        color: 'green',
        price: '1200',
        heading: 'IGL KENZO',
        info: [
          'Premium 100% solid hybrid silica coating',
          '10H hardness with extreme silk like slick',
          'Ultimate gloss & shine',
          'Repels water, oil & dirt',
          'Extremely durable lasting up to 5 years'
        ]
      }
    ]
  }
};

const StyledModalContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;

  & > div {
    margin-top: ${calcRem(170)};
    width: ${calcRem(1350)};
    height: 100vh;
    margin: ${calcRem(170)} auto 0;
    background: ${colors.gray2};
    overflow: auto;
    display: flex;
    position: relative;
    flex-flow: column nowrap;
    align-items: center;
  }
  /* 스크롤바 스타일  */
  & > div::-webkit-scrollbar {
    width: 10px;
  }
  & > div::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  & > div::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;

const StyledModalBodyContainer = styled.div`
  width: 100%;
  padding-top: ${calcRem(180)};

  h4 {
    font-size: ${calcRem(45)};
    text-align: center;
    font-weight: 700;
    font-family: Montserrat;
    margin-top: ${calcRem(60)};
    margin-bottom: ${calcRem(100)};
  }

  & > button {
    position: absolute;
    top: ${calcRem(60)};
    right: ${calcRem(60)};
    margin: 0;
    width: auto;
    background: transparent;
    color: ${colors.black};
    border: 0;
    font-size: ${calcRem(36)};

    &:hover {
      background: transparent;
      border: 0;
    }
    & div {
      margin: 0;
    }
    path {
      fill: black;
    }
  }
`;
const StyledPackageContainer = styled.div`
  border-bottom: ${calcRem(2.4)} solid ${colors.lightGray};

  section {
    border: 0;
    background: ${colors.gray2};
  }
  & + & {
    border-bottom: 0;
  }
`;

const StyledButtonContainer = styled.div`
  width: 100%;
  padding: 200px 0;
  position: relative;
  button {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
  }
`;
const WheelModalDialog = () => {
  return (
    // <Portal id="modal-root">
    <StyledModalContainer>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Wheels and Tires Product Options"
        aria-describedby="Wheels and Tires Product Options"
        tabIndex="0"
      >
        <header id="Wheels and Tires Product Options">
          <A11yHidden as="h3">Ceramic Pro Product ModalDialog</A11yHidden>
        </header>
        <StyledModalBodyContainer>
          <StyledPackageContainer>
            <BrandList
              type="wheel"
              mode="checkbox"
              size="wheel"
              title="Tire Brands We Offer"
            />
          </StyledPackageContainer>
          <StyledPackageContainer>
            <BrandList
              type="tire"
              mode="checkbox"
              size="tire"
              title="Tire Brands We Offer"
            />
          </StyledPackageContainer>
          <StyledButtonContainer>
            <Button mode="button">Confirm</Button>
          </StyledButtonContainer>
          <Button mode="button" aria-label="Modal 닫기">
            <Icon type="close" />
          </Button>
        </StyledModalBodyContainer>
      </div>
    </StyledModalContainer>
    // </Portal>
  );
};

A11yHidden.displayName = 'Modal Title';
StyledModalContainer.displayName = 'Modal Container';
StyledModalBodyContainer.displayName = 'Modal Body Container';
StyledPackageContainer.displayName = 'Modal Product List Container';
StyledButtonContainer.displayName = 'Button Container';

export default React.memo(WheelModalDialog);
