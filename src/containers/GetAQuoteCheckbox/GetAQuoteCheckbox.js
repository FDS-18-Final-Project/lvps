import React, { useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { calcInterval, fontSizes, calcRem, colors, device } from 'theme/theme';
import CeramicProModalDialog from 'containers/ModalDialog/CeramicProModalDialog';
import DetailModalDialog from 'containers/ModalDialog/DetailModalDialog';
import PPFModalDialog from 'containers/ModalDialog/PPFModalDialog';
import WindowModalDialog from 'containers/ModalDialog/WindowModalDialog';
import WheelModalDialog from 'containers/ModalDialog/WheelModalDialog';
import { ceramicReset } from 'store/modal/ceramic';
import { ppfReset } from 'store/modal/ppf';
import { windowReset } from 'store/modal/window';
import { detailReset } from 'store/modal/detail';
import { wheelAndTireReset } from 'store/modal/wheelAndTire';
import { deleteService } from 'store/service/service';
import CheckBox from 'components/CheckBox/CheckBox';
import Layout from 'pages/Layout/Layout';
import Button from 'components/Button/Button';
import Icon from 'components/Icon/Icon';
import { useViewSize } from 'hooks';
import GetAQuoteFormSection from 'containers/GetAQuoteFormSection/GetAQuoteFormSection';
import isEmpty from 'utils/isEmpty';

const FullContainer = styled.section`
  position: relative;
  padding: ${calcInterval([30, 0])};
  ${({ desktop }) =>
    desktop &&
    css`
      background-color: rgba(45, 45, 45, 0.8);
      padding: ${calcInterval([80, 0, 146])};

      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        background-image: url('assets/GetAQuoteCheckboxBgImage.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }
    `}
  h2 {
    font-size: ${fontSizes.titleBase};
    line-height: ${calcRem(67)};
    color: ${colors.white};
    text-align: center;
  }

  .btnContainer {
    margin-top: 50px;
  }

  ${device.tablet} {
    h2 {
      font-size: ${fontSizes.small};
      line-height: ${calcRem(21)};
      color: ${colors.redMain};
      text-align: center;
    }

    input {
      width: 205px;
      height: 260px;
    }
  }
`;

const GetAQuoteCheckboxContainer = styled.div`
  background-color: ${({ desktop }) => desktop && `rgba(45, 45, 45, 0.8)`};
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: ${calcInterval([20, 200, 50])};

  .checkboxContainer {
    margin: ${calcInterval([25, 37])};
  }

  ${device.tablet} {
    padding: ${calcInterval([20, 10])};

    .checkboxContainer {
      margin: ${calcInterval([10, 10])};
    }
    .checkboxContainer::after {
      font-size: ${fontSizes.small};
    }
  }
`;

const GetAQuoteCheckbox = () => {
  const [isVisible, setIsVisible] = useState(false);
  const selectedService = useSelector(state => state.service);
  const dispatch = useDispatch();
  const { desktop } = useViewSize();

  const handleReset = (actionFunc, key) => {
    return (reset, e) => {
      dispatch(actionFunc());
      dispatch(deleteService(key));
      reset(e);
    };
  };

  const handleVisible = () => {
    setIsVisible(true);
  };

  useLayoutEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    if (!isVisible) return;
    const clientRect = document
      .getElementById('paragraph')
      .getBoundingClientRect();
    const relativeTopPosition = clientRect.top;

    const absoluteTopPosition = window.pageYOffset + relativeTopPosition; //절대 좌표
    window.scrollTo(0, absoluteTopPosition);

    return () => {
      document.documentElement.style.scrollBehavior = 'initial';
    };
  }, [isVisible]);

  return (
    <>
      <FullContainer desktop={desktop ? 1 : 0}>
        <h2>You Can Choose Multiple Services</h2>
        <GetAQuoteCheckboxContainer desktop={desktop ? 1 : 0}>
          <CheckBox
            desc="CERAMIC COATING"
            Modal={CeramicProModalDialog}
            handleReset={handleReset(ceramicReset, 'ceramicpro')}
          />
          <CheckBox
            desc="PAINT PROTECTION FILM"
            Modal={PPFModalDialog}
            handleReset={handleReset(ppfReset, 'ppf')}
          />
          <CheckBox
            desc="WINDOW TINTING"
            Modal={WindowModalDialog}
            handleReset={handleReset(windowReset, 'window')}
          />
          <CheckBox
            desc="PROFESSIONAL DETAILING & PAINT CORRECTION"
            Modal={DetailModalDialog}
            handleReset={handleReset(detailReset, 'detail')}
          />
          <CheckBox
            desc="WHEELS & TIRES"
            Modal={WheelModalDialog}
            handleReset={handleReset(wheelAndTireReset, 'wheelAndTire')}
          />
        </GetAQuoteCheckboxContainer>
        <Layout.FlexContainer className="btnContainer">
          <Button disabled={isEmpty(selectedService)} onClick={handleVisible}>
            Next
            <Icon
              title="right arrow"
              className="icon"
              type="rightArrow"
              color={colors.white}
              width="20"
            />
          </Button>
        </Layout.FlexContainer>
      </FullContainer>
      {isVisible && <GetAQuoteFormSection />}
    </>
  );
};

FullContainer.displayName = 'FullContainer';
GetAQuoteCheckboxContainer.displayName = 'GetAQuoteCheckboxContainer';
export default GetAQuoteCheckbox;
