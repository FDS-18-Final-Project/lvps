import React, { useState } from 'react';
import styled from 'styled-components';
import { fontSizes, colors } from 'theme/theme';
import { string } from 'prop-types';
import Icon from 'components/Icon/Icon';

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
    height: 230px;
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

  button {
    width: 60px;
    height: 50px;
    cursor: pointer;
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
  const resetConfirm = () => setConfirm(false);
  return (
    <>
      <CheckBoxContainer imagePath={imagePath} label={label} confirm={confirm}>
        <input
          type="checkbox"
          checked={visible}
          onChange={handleModalVisible}
        />
        <button onClick={() => handleReset(resetConfirm)}>초기화</button>
        {confirm && <Icon className="icon" type="circleCheck" />}
      </CheckBoxContainer>
      {visible && (
        <Modal
          onChange={handleModalVisible}
          confirmCheck={handleConfirmCheck}
        />
      )}
    </>
  );
};

CheckBox.propTypes = {
  imagePath: string,
  label: string
};

CheckBox.defaultProps = {
  imagePath: 'assets/dummyImage.png',
  label: 'CERAMIC COATING'
};

CheckBoxContainer.displayName = 'CheckBoxContainer';

export default CheckBox;
