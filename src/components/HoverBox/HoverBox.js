import { string, array } from 'prop-types';
import styled from 'styled-components';
import theme from 'theme/theme';

const { colors, fontSizes } = theme;

// HoverBox 컴포넌트 스타일링
const StyledWrapper = styled.div`
  div + div {
    margin-top: 1px;
  }
`;

const StyledItem = styled.div`
  width: 440px;
  height: 64px;
  padding: 0 0.7em 0 1.5em;
  justify-content: space-between;
  font-size: ${fontSizes.base};
  font-weight: 500;
`;

// // HoverBox 개별 컴포넌트
// const HoverBoxItem = ({ styledMode, to, children, ...restProps }) => {
//   return (
//     <styledItem styledMode={styledMode}>
//       <LinkIcon to={to} {...restProps}>
//         {children}
//       </LinkIcon>
//     </styledItem>
//   );
// };

const HoverBox = ({ HoverBoxItems }) => {
  console.log(HoverBoxItems);
  return (
    <StyledWrapper>
      {HoverBoxItems.map((value, idx, styledMode, ...restProps) => (
        <StyledItem
          key={idx}
          children={value}
          styledMode={styledMode}
          {...restProps}
        />
      ))}
    </StyledWrapper>
  );
};

HoverBox.propTypes = {
  HoverBoxItems: array.isRequired,
  styledMode: string,
  children: string
};

HoverBox.defaultProps = {
  HoverBoxItems: [],
  styledMode: 'hoverBoxTheme',
  children: 'HoverBox Item'
};

HoverBox.displayName = 'HoverBox';

export default HoverBox;
