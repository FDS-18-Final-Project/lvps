import React from 'react';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import { calcInterval, fontSizes, calcRem, colors } from 'theme/theme';
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
        background-image: url('assets/dummy_staff.png');
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

  @media only screen and (max-width: 768px) {
    h2 {
      font-size: ${fontSizes.small};
      line-height: ${calcRem(21)};
      color: ${colors.redMain};
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

  label {
    margin: ${calcInterval([25, 37])};
  }

  @media only screen and (max-width: 768px) {
    padding: ${calcInterval([20, 10])};

    label {
      margin: ${calcInterval([10, 10])};
    }
    label::after {
      font-size: ${fontSizes.small};
    }
  }
`;

const GetAQuoteCheckbox = () => {
  const dispatch = useDispatch();
  const { desktop } = useViewSize();
  const handleReset = (actionFunc, key) => {
    return reset => {
      dispatch(actionFunc());
      dispatch(deleteService(key));
      reset();
    };
  };

  return (
    <FullContainer desktop={desktop ? 1 : 0}>
      <h2>You Can Choose Multiple Services</h2>
      <GetAQuoteCheckboxContainer desktop={desktop ? 1 : 0}>
        <CheckBox
          label="CERAMIC COATING"
          Modal={CeramicProModalDialog}
          handleReset={handleReset(ceramicReset, 'ceramicpro')}
        />
        <CheckBox
          label="PAINT PROTECTION FILM"
          Modal={PPFModalDialog}
          handleReset={handleReset(ppfReset, 'ppf')}
        />
        <CheckBox
          label="WINDOW TINTING"
          Modal={WindowModalDialog}
          handleReset={handleReset(windowReset, 'window')}
        />
        <CheckBox
          label="PROFESSIONAL DETAILING & PAINT CORRECTION"
          Modal={DetailModalDialog}
          handleReset={handleReset(detailReset, 'detail')}
        />
        <CheckBox
          label="WHEELS & TIRES"
          Modal={WheelModalDialog}
          handleReset={handleReset(wheelAndTireReset, 'wheelAndTire')}
        />
      </GetAQuoteCheckboxContainer>
      <Layout.FlexContainer className="btnContainer">
        <Button mode="link" to="/GetAQuoteForm">
          Next
          <Icon
            className="icon"
            type="rightArrow"
            color={colors.white}
            width="20"
          />
        </Button>
      </Layout.FlexContainer>
    </FullContainer>
  );
};

FullContainer.displayName = 'FullContainer';
GetAQuoteCheckboxContainer.displayName = 'GetAQuoteCheckboxContainer';
export default GetAQuoteCheckbox;
