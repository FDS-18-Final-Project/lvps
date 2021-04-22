import { object } from 'prop-types';
import styled from 'styled-components';

const StyledImgContent = styled.img`
  width: 100%;
  height: 100%;
`;

const CarouselImgItem = ({ content }) => {
  return <StyledImgContent src={content.path} />;
};

CarouselImgItem.propTypes = {
  /** 캐러셀 이미지 아이템 컨텐츠 객체 */
  content: object.isRequired
};

CarouselImgItem.defaultProps = {
  content: {}
};

StyledImgContent.displayName = 'StyledImgContent';

export default CarouselImgItem;
