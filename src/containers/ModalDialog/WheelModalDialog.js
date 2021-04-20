import React from 'react';
import styled from 'styled-components';
import { colors, calcRem } from 'theme/theme';
import { Button, A11yHidden, Icon } from 'components';
import { BrandList } from 'containers';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { addService } from 'store/service/service';

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

// const tireList = [
//   {
//     id: 'tire_01',
//     value: 'beyern',
//     src: 'assets/img/tire_beyern.png',
//     active: false
//   },
//   {
//     id: 'tire_02',
//     value: 'blackrhino',
//     src: 'assets/img/tire_blackrhino.png',
//     active: false
//   },
//   {
//     id: 'tire_03',
//     value: 'enkei',
//     src: 'assets/img/tire_enkei.png',
//     active: false
//   },
//   {
//     id: 'tire_04',
//     value: 'fastwheels',
//     src: 'assets/img/tire_fastwheels.png',
//     active: false
//   },
//   {
//     id: 'tire_05',
//     value: 'hre',
//     src: 'assets/img/tire_hre.png',
//     active: false
//   },
//   {
//     id: 'tire_06',
//     value: 'vorsteiner',
//     src: 'assets/img/tire_vorsteiner.png',
//     active: false
//   },
//   {
//     id: 'tire_07',
//     value: 'gts',
//     src: 'assets/img/tire_gts.png',
//     active: false
//   },
//   {
//     id: 'tire_08',
//     value: 'superspeed',
//     src: 'assets/img/tire_superspeed.png',
//     active: false
//   },
//   {
//     id: 'tire_09',
//     value: 'mandrus',
//     src: 'assets/img/tire_mandrus.png',
//     active: false
//   },
//   {
//     id: 'tire_10',
//     value: 'tirerays',
//     src: 'assets/img/tire_rays.png',
//     active: false
//   },
//   {
//     id: 'tire_11',
//     value: 'replica',
//     src: 'assets/img/tire_replika.png',
//     active: false
//   },
//   {
//     id: 'tire_12',
//     value: 'rotiform',
//     src: 'assets/img/tire_rotiform.png',
//     active: false
//   },
//   {
//     id: 'tire_13',
//     value: 'sparco',
//     src: 'assets/img/tire_sparco.png',
//     active: false
//   },
//   {
//     id: 'tire_14',
//     value: 'superspeedCircle',
//     src: 'assets/img/tire_superspeedCircle.png',
//     active: false
//   }
// ];

// const wheelList = [
//   {
//     id: 'wheel_01',
//     value: 'wheel_bfgoodrich',
//     src: 'assets/img/wheel_bfgoodrich.png',
//     active: false
//   },
//   {
//     id: 'wheel_02',
//     value: 'wheel_bridgestone',
//     src: 'assets/img/wheel_bridgestone.png',
//     active: false
//   },
//   {
//     id: 'wheel_03',
//     value: 'wheel_continental',
//     src: 'assets/img/wheel_continental.png',
//     active: false
//   },
//   {
//     id: 'wheel_04',
//     value: 'wheel_dunlop',
//     src: 'assets/img/wheel_dunlop.png',
//     active: false
//   },
//   {
//     id: 'wheel_05',
//     value: 'wheel_yokohama',
//     src: 'assets/img/wheel_yokohama.png',
//     active: false
//   },
//   {
//     id: 'wheel_06',
//     value: 'wheel_pirelli',
//     src: 'assets/img/wheel_pirelli.png',
//     active: false
//   },
//   {
//     id: 'wheel_07',
//     value: 'wheel_generaltire',
//     src: 'assets/img/wheel_generaltire.png',
//     active: false
//   },
//   {
//     id: 'wheel_08',
//     value: 'wheel_gislaved',
//     src: 'assets/img/wheel_gislaved.png',
//     active: false
//   },
//   {
//     id: 'wheel_09',
//     value: 'wheel_gislaved',
//     src: 'assets/img/wheel_gislaved.png',
//     active: false
//   },
//   {
//     id: 'wheel_10',
//     value: 'wheel_hankook',
//     src: 'assets/img/wheel_hankook.png',
//     active: false
//   },
//   {
//     id: 'wheel_11',
//     value: 'wheel_uniroyal',
//     src: 'assets/img/wheel_uniroyal.png',
//     active: false
//   },
//   {
//     id: 'wheel_12',
//     value: 'wheel_rovelo',
//     src: 'assets/img/wheel_rovelo.png',
//     active: false
//   },
//   {
//     id: 'wheel_13',
//     value: 'wheel_kapsen',
//     src: 'assets/img/wheel_kapsen.png',
//     active: false
//   },
//   {
//     id: 'wheel_14',
//     value: 'wheel_kumhotire',
//     src: 'assets/img/wheel_kumhotire.png',
//     active: false
//   },
//   {
//     id: 'wheel_15',
//     value: 'wheel_michelin',
//     src: 'assets/img/wheel_michelin.png',
//     active: false
//   },
//   {
//     id: 'wheel_16',
//     value: 'wheel_maxxis',
//     src: 'assets/img/wheel_maxxis.png',
//     active: false
//   },
//   {
//     id: 'wheel_17',
//     value: 'wheel_nexen',
//     src: 'assets/img/wheel_nexen.png',
//     active: false
//   },
//   {
//     id: 'wheel_18',
//     value: 'wheel_toyotires',
//     src: 'assets/img/wheel_toyotires.png',
//     active: false
//   }
// ];

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
    <StyledModalContainer>
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
