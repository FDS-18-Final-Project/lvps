import { array } from 'prop-types';
import styled from 'styled-components';
import { calcRem } from 'theme/theme';
import HoverItem from 'components/HoverItem/HoverItem';

// HoverBox 컴포넌트 스타일링
const StyledContainer = styled.ul`
  position: absolute;
`;

const StyledSubContainer = styled.ul`
  display: none;
  margin-left: ${calcRem(1)};
  position: absolute;
  top: 0;
  left: 100%;

  li {
    width: ${calcRem(348)};
    border-bottom: ${calcRem(1)} solid transparent;
  }
`;

const HoverBox = ({ HoverItems, ...restProps }) => {
  return (
    <StyledContainer {...restProps}>
      <HoverItem id="hover_1" value="Ceramic Coating" to="/serviceCeramic">
        <StyledSubContainer>
          <HoverItem id="hover_2" value="Ceramic Pro" to="/" />
          <HoverItem id="hover_3" value="IGL Coatings" to="/" />
        </StyledSubContainer>
      </HoverItem>
      <HoverItem
        id="hover_4"
        value="Paint Protection Film"
        to="/paintProtection"
      />
      <HoverItem id="hover_5" value="Window Tinting" to="/" />
      <HoverItem id="hover_6" value="Detailing &amp; Paint Correction" to="/" />
      <HoverItem id="hover_7" value="Wheel &amp; Tire" to="/" />
    </StyledContainer>
  );
};

HoverBox.propTypes = {
  HoverItems: array.isRequired
};

HoverBox.defaultProps = {
  HoverItems: [
    {
      id: 1,
      value: 'Ceramic Pro',
      to: '/'
    },
    {
      id: 2,
      value: 'Paint Protection Film',
      to: '/'
    },
    {
      id: 3,
      value: 'Window Tinting',
      to: '/'
    },
    {
      id: 4,
      value: 'Professional Detailing & Paint Correction',
      to: '/'
    },
    {
      id: 5,
      value: 'Wheels & Tires',
      to: '/'
    }
  ],
  HoverSubItems: [
    {
      id: 'hover_2',
      value: 'Ceramic Pro',
      to: '/'
    },
    {
      id: 'hover_3',
      value: 'IGL Coatings',
      to: '/'
    }
  ]
};

HoverBox.displayName = 'HoverBox';

export default HoverBox;
