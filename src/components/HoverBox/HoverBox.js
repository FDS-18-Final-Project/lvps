import styled from 'styled-components';
import { calcRem } from 'theme/theme';
import HoverItem from 'components/HoverItem/HoverItem';
import { motion } from 'framer-motion';

// HoverBox 컴포넌트 스타일링
const StyledContainer = styled(motion.ul)`
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

const HoverBox = ({ ...restProps }) => {
  return (
    <StyledContainer {...restProps}>
      <HoverItem id="hover_1" value="Ceramic Coating">
        <StyledSubContainer>
          <HoverItem id="hover_2" value="Ceramic Pro" to="/ceramic-coating" />
          <HoverItem id="hover_3" value="IGL Coatings" to="/igl-coatings" />
        </StyledSubContainer>
      </HoverItem>
      <HoverItem
        id="hover_4"
        value="Paint Protection Film"
        to="/paint-protection"
      />
      <HoverItem id="hover_5" value="Window Tinting" to="/window-tinting" />
      <HoverItem
        id="hover_6"
        value="Detailing &amp; Paint Correction"
        to="/detailing-and-correction"
      />
      <HoverItem id="hover_7" value="Wheel &amp; Tire" to="/wheel-and-tire" />
    </StyledContainer>
  );
};

HoverBox.displayName = 'HoverBox';

export default HoverBox;
