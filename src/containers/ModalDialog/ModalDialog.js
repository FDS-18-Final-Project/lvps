import React from 'react';
import styled from 'styled-components';
import { colors, calcRem } from 'theme/theme';
import { Button, A11yHidden, Icon } from 'components';
import Portal from 'utils/portal';

const modalType = {
  ceramic: {
    label: 'Ceramic Pro Product Options',
    title: 'Ceramic Pro Product ModalDialog',
    products: [
      {
        id: 1,
        title: 'Ceramic Pro Protection Packages'
      },
      {
        id: 2,
        title: 'Ceramic Pro Protection Additional Options'
      }
    ]
  },
  ppf: {
    label: 'Paint Protection Film Product Options',
    title: 'Paint Protection Film Product ModalDialog',
    products: [
      {
        id: 1,
        title: 'Ceramic Pro Protection Packages'
      },
      {
        id: 2,
        title: 'Ceramic Pro Protection Additional Options'
      }
    ]
  },
  window: {},
  detail: {},
  wheel: {}
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
    margin: 170px auto 0;
    background: ${colors.gray2};
    overflow: auto;
    display: flex;
    position: relative;
    flex-flow: column nowrap;
    align-items: center;
  }

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
  button {
    margin: ${calcRem(115)} 0 ${calcRem(105)};
  }
  button:last-child {
    position: absolute;
    top: ${calcRem(60)};
    right: ${calcRem(60)};
    margin: 0;
    width: auto;
    background: transparent;
    color: ${colors.black};
    border: 0;
    font-size: ${calcRem(36)};

    & div {
      margin: 0;
    }
    path {
      fill: black;
    }
  }
`;
const StyledModalBody = styled.div`
  width: 100%;
  padding-top: ${calcRem(180)};
  & div + div {
    border-top: ${calcRem(2.4)} solid ${colors.lightGray};
    margin-top: ${calcRem(60)};
    padding-top: ${calcRem(50)};
  }
`;

const StyledModalProductContainer = styled.div`
  h4 {
    font-size: ${calcRem(45)};
    text-align: center;
    font-weight: 700;
    font-family: Montserrat;
    margin-bottom: ${calcRem(100)};
  }
`;
const ModalDialog = ({ type, open, closin }) => {
  const { label, title, products } = modalType[type];

  return (
    // <Portal id="modal-root">
    <StyledModalContainer>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={label}
        aria-describedby={label}
        tabindex="0"
      >
        <header id={label}>
          <A11yHidden as="h3">{title}</A11yHidden>
        </header>
        {/* 카드 컨텐츠  */}
        <StyledModalBody>
          {products.map(product => (
            <StyledModalProductContainer>
              <h4>{product.title}</h4>
            </StyledModalProductContainer>
          ))}
        </StyledModalBody>
        <Button mode="button">Confirm</Button>
        <Button mode="button" aria-label="Modal 닫기">
          <Icon type="close" />
        </Button>
      </div>
    </StyledModalContainer>
    // </Portal>
  );
};

export default ModalDialog;
