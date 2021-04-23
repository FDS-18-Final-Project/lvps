import React, { useEffect, useState } from 'react';
import { string, node, func, object, oneOfType } from 'prop-types';
import styled from 'styled-components';
import { fontSizes, colors, calcRem, calcInterval } from 'theme/theme';
import Icon from 'components/Icon/Icon';
import { AnimatePresence } from 'framer-motion';
import Portal from 'utils/portal';

const CheckBoxContainer = styled.div`
  display: inline-block;
  border: 1px solid lightgray;
  position: relative;
  border: ${({ confirm }) =>
    confirm ? `4px solid ${colors.redMain}` : '4px solid #c9c9c9'};
  background-color: white;

  width: 300px;
  height: 380px;
  cursor: pointer;
  margin:${calcInterval([10, 30])};

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 60%;
    opacity: ${({ confirm }) => (confirm ? 0.6 : 1)};
    background-color: black;
    background-image: url(${({ imagePath }) => imagePath});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  &::after {
    content: '${({ desc }) => desc}';
    width: 100%;
    position: absolute;
    text-align: center;
    font-size: ${fontSizes.lg};
    font-weight: bold;
    bottom: 17.2%;
    right: 50%;
    transform: translateX(50%);
  }


  .resetBtn {
    position: absolute;
    top: ${calcRem(5)};
    right: ${calcRem(5)};
    z-index: ${({ confirm }) => (confirm ? 98 : -1000)};

    svg {
      path {
        fill: ${colors.white}
      }
    }

  }
  .icon {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate3d(-50%, 0, 0);

  }
`;

const CheckBox = ({ imagePath, desc, Modal, handleReset }) => {
  const [visible, isVisible] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const handleModalVisible = () => {
    isVisible(!visible);
  };

  const handleConfirmCheck = () => setConfirm(true);

  const resetConfirm = e => {
    e.stopPropagation();
    setConfirm(false);
  };

  useEffect(() => {
    document.body.style.overflow = visible ? 'hidden' : 'auto';
  });

  return (
    <>
      <CheckBoxContainer
        className="checkboxContainer"
        imagePath={imagePath}
        desc={desc}
        confirm={confirm}
        onClick={handleModalVisible}
      >
        <Icon
          className="resetBtn"
          type="close"
          title="reset button"
          button
          onClick={e => handleReset(resetConfirm, e)}
        />
        {confirm && (
          <Icon title="confirm" className="icon" type="circleCheck" />
        )}
      </CheckBoxContainer>

      <AnimatePresence>
        {visible && (
          <Portal id="modal-root">
            <Modal
              onChange={handleModalVisible}
              confirmCheck={handleConfirmCheck}
              initial={{
                opacity: 0,
                y: -200,
                transition: { duration: 0.3 }
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.3 }
              }}
              exit={{
                y: -200,
                opacity: 0,
                transition: { duration: 0.3 }
              }}
            />
          </Portal>
        )}
      </AnimatePresence>
    </>
  );
};

CheckBox.propTypes = {
  /** 이미지 경로 */
  imagePath: string,
  /** label 텍스트 */
  desc: string,
  /** 모달 */
  Modal: oneOfType([func, object, node]),
  /** 초기화 함수 */
  handleReset: func
};

CheckBox.defaultProps = {
  imagePath: 'assets/dummyImage.png',
  desc: 'CERAMIC COATING'
};

CheckBoxContainer.displayName = 'CheckBoxContainer';

export default CheckBox;
