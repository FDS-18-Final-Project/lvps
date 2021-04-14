import { object } from 'prop-types';
import styled from 'styled-components';

const StyledImgContent = styled.img`
  width: 100%;
  height: 100%;
`;

const CarouselImgItem = ({ content }) => {
  return <StyledImgContent draggable={false} src={content.path} />;
};

CarouselImgItem.propTypes = {
  content: object.isRequired
};

CarouselImgItem.defaultProps = {
  content: {}
};

StyledImgContent.displayName = 'StyledImgContent';

export default CarouselImgItem;
