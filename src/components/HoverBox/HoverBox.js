import { array } from 'prop-types';
import styled from 'styled-components';
import { calcRem } from 'theme/theme';
import HoverItem from 'components/HoverItem/HoverItem';

// HoverBox 컴포넌트 스타일링
const StyledContainer = styled.ul`
  li + li {
    margin-top: ${calcRem(1)};
  }
`;

const HoverBox = ({ HoverItems }) => {
  return (
    <StyledContainer>
      {HoverItems.map(item => (
        <HoverItem key={item.id} value={item.value} to={item.to} />
      ))}
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
  ]
};

HoverBox.displayName = 'HoverBox';

export default HoverBox;
