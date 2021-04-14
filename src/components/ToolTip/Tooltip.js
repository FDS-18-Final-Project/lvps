import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import { colors, calcRem, fontSizes } from 'theme/theme';

const pointStyle = {
  top: {
    top: '-10px',
    left: `50%`,
    transform: 'translateX(-50%)',
    'border-top': '15px solid none',
    'border-bottom': `15px solid ${colors.redMain}`,
    'border-right': '15px solid transparent',
    'border-left': '15px solid transparent'
  }
};

const TooltipStyleContainer = styled.div`
  width: ${props => calcRem(props.width)};
  height: ${props => calcRem(props.height)};
  background: ${props => props.background};
  color: ${props => props.color};
  font-size: ${fontSizes.base};
  position: absolute;
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  right: ${props => props.right};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin: 0;
    font-size: ${props => calcRem(props.fontSize)};
    font-family: 'Helvetica Neue LT Pro';
    font-weight: 500;
  }

  &::before {
    content: '';
    background: transparent;
    position: absolute;

    ${props => pointStyle[props.direction]}
  }
`;

const Tooltip = ({ id, message, direction, ...restProps }) => {
  return (
    <TooltipStyleContainer
      tabIndex="0"
      role="tooltip"
      id={id}
      direction={direction}
      {...restProps}
    >
      <span>{message}</span>
    </TooltipStyleContainer>
  );
};

Tooltip.prototype = {
  id: string,
  direction: string,
  message: string,
  top: string,
  bottom: string,
  left: string,
  right: string,
  width: string,
  height: string,
  background: string,
  color: string,
  fontSize: string
};

Tooltip.defaultProps = {
  // 툴팁과 연결된 컴포넌트에 aria-describedby가 있어야됨, id의 value랑 똑같아야됨
  id: 'searchIcon',
  message: 'click to search',
  direction: 'top',
  top: 'inital',
  bottom: 'inital',
  left: 'inital',
  right: 'inital',
  width: '149',
  height: '37',
  fontSize: '18',
  background: `#EB1527`,
  color: `#FFFFFF`
};

export default Tooltip;
