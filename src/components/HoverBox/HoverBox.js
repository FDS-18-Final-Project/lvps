import styled from 'styled-components';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';
import theme from 'theme/theme';

const { colors, fontSizes } = theme;

// HoverBox 컴포넌트 스타일링
const Item = styled(Link)`
  display: block;
  box-sizing: border-box;
  width: 410px;
  height: 64px;
  border-bottom: 1px solid ${colors.white};
  &:last-child {
    border-bottom: none;
  }
  padding: 15px 30px 15px 30px;
  align-items: left;
  justify-content: center;

  background-color: ${colors.red_06};
  color: ${colors.white};

  text-decoration: none;
  font-size: ${fontSizes.base};
  font-weight: 500;
  font-family: inherit;

  // 디자인 시안에 따라 수정 필요
  &:hover {
    background-color: ${colors.white};
    color: ${colors.red_06};
  }
`;

// HoverBox 개별 컴포넌트
const HoverBoxItem = ({ to, children, ...restProps }) => {
  return (
    <Item to={to} {...restProps}>
      {children}
    </Item>
  );
};

HoverBoxItem.propTypes = {
  to: string,
  children: string
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
];

const HoverBox = () => {
  return HoverBoxItemVal.map((value, idx) => (
    <HoverBoxItem key={idx} children={value} />
  ));
};

HoverBox.displayName = 'HoverBox';

export default HoverBox;
