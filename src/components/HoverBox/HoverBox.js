import styled from 'styled-components';
import { string } from 'prop-types';
import { Link } from 'react-router-dom'

// HoverBox 컴포넌트 스타일링
const Item = styled(Link)`
  display: block;
  box-sizing: border-box;
  width: 410px;
  height: 64px;
  border-bottom: 1px solid white;
  &:last-child {
    border-bottom: none;
  };
  padding: 15px 30px 15px 30px;
  align-items: left;
  justify-content: center;
  
  background-color: #7D2E2E;
  color: white;

  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
  font-family: inherit;

  // 디자인 시안에 따라 수정 필요
  &:hover {
    background-color: white;
    color: #7D2E2E;
  }
`;

// HoverBox 개별 컴포넌트
const HoverBoxItem = ({ to, children, ...restProps }) => {
  return (
    <Item to={to} {...restProps}>
      {children}
    </Item>
  )  
};

HoverBoxItem.propTypes = {
  to: string,
  children: string,
};

HoverBoxItem.defaultProps = {
  to: '/',
  children: 'HoverBox item'
};

const HoverBoxItemVal = [
  'Ceramic Coating', 
  'Paint Protection Films', 
  'Detailing & Paint Correction', 
  'Window Tinting', 
  'Detailing & Paint Correction'
]

const HoverBox = () => {
  return HoverBoxItemVal.map(value => <HoverBoxItem children={value} />)
};

HoverBox.displayName = 'HoverBox';

export default HoverBox;
