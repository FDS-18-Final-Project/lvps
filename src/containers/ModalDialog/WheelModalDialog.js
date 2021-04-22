import React from 'react';
import styled from 'styled-components';
import { colors, calcRem } from 'theme/theme';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { addService } from 'store/service/service';
import A11yHidden from 'components/A11yHidden/A11yHidden.styled';
import BrandList from 'containers/BrandList/BrandList';
import Button from 'components/Button/Button';
import Icon from 'components/Icon/Icon';

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
    background: ${colors.gray_02};
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
    background: ${colors.gray_02};
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

const WheelModalDialog = ({ onChange, confirmCheck, ...restProps }) => {
  const { wheelList, tireList } = useSelector(state => state.wheelAndTireModal);
  const dispatch = useDispatch();

  const selectedItem = [
    ...wheelList.filter(wheel => wheel.active),
    ...tireList.filter(wheel => wheel.active)
  ];
  const handleConfirmActive = () => {
    dispatch(addService(selectedItem, 'wheelAndTire'));
    onChange();
    confirmCheck();
  };

  return (
    // <Portal id="modal-root">
    <StyledModalContainer className="dim">
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Wheels and Tires Product Options"
        aria-describedby="Wheels and Tires Product Options"
        tabIndex="0"
        {...restProps}
      >
        <header id="Wheels and Tires Product Options">
          <A11yHidden as="h3">Ceramic Pro Product ModalDialog</A11yHidden>
        </header>
        <StyledModalBodyContainer>
          <StyledPackageContainer>
            <BrandList
              wheelList={wheelList}
              type="wheel"
              mode="checkbox"
              size="wheel"
              title="Tire Brands We Offer"
            />
          </StyledPackageContainer>
          <StyledPackageContainer>
            <BrandList
              tireList={tireList}
              type="tire"
              mode="checkbox"
              size="tire"
              title="Tire Brands We Offer"
            />
          </StyledPackageContainer>
          <StyledButtonContainer>
            <Button
              disabled={!selectedItem.length}
              mode="button"
              onClick={handleConfirmActive}
            >
              Confirm
            </Button>
          </StyledButtonContainer>
          <Button mode="button" aria-label="Modal 닫기" onClick={onChange}>
            <Icon type="close" />
          </Button>
        </StyledModalBodyContainer>
      </motion.div>
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
