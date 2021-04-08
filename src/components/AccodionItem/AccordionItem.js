import Icon from 'components/Icon/Icon';
import { object, func } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Button } from '..';

const StyledButton = styled(Button)`
  display: block;
  width: 100%;
  height: 3.7rem;
  background: #fff;
  color: inherit;
  padding: 0px 50px 50px;
  border: 1px solid #aaa;
  font-weight: 400;
  overflow: hidden;
  list-style: none;
  position: relative;

  h3 {
    font-size: 2rem;
    padding: 13px 0;
    text-align: center;
    border-bottom: 1px solid #c9c9c9;
    font-weight: bold;
  }
  p {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    margin-left: -15px;
    font-size: 1.5rem;
    color: #c9c9c9;

    span {
      padding: 5px;
    }
  }
  div {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate3d(-50px, -50%, 0);
  }
`;

const ItemWrapper = styled.li`
  max-width: 465px;
`;

const variants = {
  visible: {
    color: '#fff',
    backgroundColor: '#eb1527',
    height: 'auto',
    transition: { duration: 0.5, type: 'tween' },
  },
  hidden: {
    color: '#000',
    backgroundColor: '#fff',
    height: '3.7rem',
    transition: { duration: 0.5, type: 'tween' },
  },
};

function AccordionItem({ item, onClick }) {
  return (
    <ItemWrapper>
      <StyledButton
        tag="a"
        onClick={() => onClick(item.id)}
        variants={variants}
        animate={item.active ? 'visible' : 'hidden'}
      >
        <h3>{item.title}</h3>
        <p>
          {item.description.map((des, i) => (
            <span key={i}>{des}</span>
          ))}
        </p>
        <Icon type="rightArrow" color="#fff" width="16" height="28" />
      </StyledButton>
    </ItemWrapper>
  );
}

AccordionItem.propTypes = {
  item: object.isRequired,
  onClick: func.isRequired,
};

AccordionItem.defaultProps = {
  item: {
    id: 1,
    title: 'Ceramic Coating',
    description: [
      'Quality Protection',
      'ServicesQuality Protection',
      'ServicesQuality Protection',
      'Services',
    ],
    active: true,
  },
};

export default React.memo(AccordionItem);
