import React, { useEffect, useState } from 'react';
import { string, node, func, object, oneOfType } from 'prop-types';
import styled from 'styled-components';
import { fontSizes, colors, calcRem } from 'theme/theme';
import Icon from 'components/Icon/Icon';
import { AnimatePresence } from 'framer-motion';
import Portal from 'utils/portal';

const CheckBoxContainer = styled.label`
  display: inline-block;
  border: 1px solid lightgray;
  position: relative;
  border: ${({ confirm }) =>
    confirm ? `4px solid ${colors.redMain}` : '4px solid #c9c9c9'};
  background-color: white;

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 60%;
    opacity: ${({ confirm }) => (confirm ? 0.8 : 1)};
    background-color: black;
    background-image: url(${({ imagePath }) => imagePath});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  &::after {
    content: '${({ label }) => label}';
    width: 100%;
    position: absolute;
    text-align: center;
    font-size: ${fontSizes.lg};
    font-weight: bold;
    bottom: 17.2%;
    right: 50%;
    transform: translateX(50%);
  }

  input {
    width: 300px;
    height: 380px;
    opacity: 0;
    cursor: pointer;
  }

  .resetBtn {
    position: absolute;
    top: ${calcRem(5)};
    right: ${calcRem(5)};
    z-index: ${({ confirm }) => (confirm ? 1000 : -1000)};

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

const CheckBox = ({ imagePath, label, Modal, handleReset }) => {
  const [visible, isVisible] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const handleModalVisible = () => {
    isVisible(!visible);
  };

  const handleConfirmCheck = () => setConfirm(true);

  const resetConfirm = () => {
    setConfirm(false);
  };

  // useEffect(() => {
  //   document.body.style.overflow = visible && 'hidden';
  // });

  return (
    <>
      <CheckBoxContainer imagePath={imagePath} label={label} confirm={confirm}>
        <input
          type="checkbox"
          checked={visible}
          onChange={handleModalVisible}
        />
        <Icon
          className="resetBtn"
          type="close"
          button
          onClick={() => handleReset(resetConfirm)}
        />
        {confirm && <Icon className="icon" type="circleCheck" />}
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
  imagePath: string,
  label: string,
  Modal: oneOfType([func, object, node]),
  handleReset: func
};

CheckBox.defaultProps = {
  imagePath: 'assets/dummyImage.png',
  label: 'CERAMIC COATING'
};

CheckBoxContainer.displayName = 'CheckBoxContainer';

export default CheckBox;
