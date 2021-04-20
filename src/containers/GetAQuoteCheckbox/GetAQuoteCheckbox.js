import { Button, Icon } from 'components/';
import { CeramicModalDialog } from 'containers/ModalDialog/CeramicProModalDialog.stories';
import DetailModalDialog from 'containers/ModalDialog/DetailModalDialog';
import PPFModalDialog from 'containers/ModalDialog/PPFModalDialog';
import WindowModalDialog from 'containers/ModalDialog/WindowModalDialog';
import { Layout } from 'pages';
import React from 'react';
import styled from 'styled-components';
import { calcInterval, fontSizes, calcRem, colors } from 'theme/theme';
import CheckBox from '../../components/CheckBox/CheckBox';
import { useDispatch } from 'react-redux';
import { ceramicReset } from 'store/modal/ceramic';
import { ppfReset } from 'store/modal/ppf';
import { windowReset } from 'store/modal/window';
import { detailReset } from 'store/modal/detail';
import WheelModalDialog from 'containers/ModalDialog/WheelModalDialog';
import { wheelAndTireReset } from 'store/modal/wheelAndTire';
import { deleteService } from 'store/service/service';

const FullContainer = styled.section`
  position: relative;
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

  h2 {
    font-size: ${fontSizes.titleBase};
    line-height: ${calcRem(67)};
    color: ${colors.white};
    text-align: center;
  }

  .btnContainer {
    margin-top: 50px;
  }
`;

const GetAQuoteCheckboxContainer = styled.div`
  background-color: rgba(45, 45, 45, 0.8);
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: ${calcInterval([20, 200, 50])};

  label {
    margin: ${calcInterval([25, 37])};
  }
`;

const GetAQuoteCheckbox = () => {
  const dispatch = useDispatch();

  const handleReset = (actionFunc, key) => {
    return reset => {
      dispatch(actionFunc());
      dispatch(deleteService(key));
      reset();
    };
  };

  return (
    <FullContainer>
      <h2>You Can Choose Multiple Services</h2>
      <GetAQuoteCheckboxContainer>
        <CheckBox
          label="CERAMIC COATING"
          Modal={CeramicModalDialog}
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
        <Button>
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
