import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Icon } from 'components';

const typeStyle = {
  quality: {
    'clip-path': 'initial',
    background: '#c9c9c9',
    width: '365px'
  },
  process: {
    background: '#ffc9c9',
    'clip-path': 'polygon(80% 0, 100% 50%, 80% 100%, 0 99%, 0 0)'
  }
};

const StyledCard = styled.div`
  width: 410px;
  height: 410px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;

  span {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    margin-top: 48px;
    padding: 0 65px 20px 65px;
  }

  ${props => typeStyle[props.type]}
`;

const StyledIcon = styled(Icon)`
  margin-left: 130px;
`;

const Card = ({ type, children, iconType }) => {
  return (
    <StyledCard type={type} iconType={iconType}>
      <StyledIcon type={iconType} />
      <span>{children}</span>
    </StyledCard>
  );
};

Card.propTypes = {
  type: PropTypes.string.isRequired,
  iconType: PropTypes.string.isRequired,
  children: PropTypes.string
};

Card.defaultProps = {
  type: 'process',
  iconType: 'checkedCar',
  children: 'card'
};

Card.displayName = 'StyledCard';
StyledCard.displayName = 'Card';

export default Card;
