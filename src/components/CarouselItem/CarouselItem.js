import styled, { css } from 'styled-components';
import { object, bool, string } from 'prop-types';
import { colors, fontSizes, calcRem } from 'theme/theme';
import { CarouselImgItem, Review } from 'components/';

const styledParagraph = css`
  margin: 0 auto;
  line-height: ${calcRem(36)};
  font-size: ${fontSizes.xxxl};
  box-sizing: border-box;
  text-align: center;
`;

const StyledCarouselItemContainer = styled.li`
  ${({ type }) => type === 'paragraph' && styledParagraph};
  flex: 0 0 100%;
  opacity: ${({ active }) => (active ? '1' : '0.2')};
  transition: all 0.5s;
`;

const CarouselItem = ({ content, colors, active, type, ...restProps }) => {
  return (
    <StyledCarouselItemContainer type={type} active={active} {...restProps}>
      {type === 'paragraph' && <Review content={content} colors={colors} />}
      {type === 'img' && <CarouselImgItem content={content} />}
      {type === 'card' && content}
    </StyledCarouselItemContainer>
  );
};

CarouselItem.propTypes = {
  content: object.isRequired,
  type: string.isRequired,
  colors: object,
  active: bool
};

CarouselItem.defaultProps = {
  content: {},
  type: 'paragraph',
  colors: { main: colors.black, sub: colors.black },
  active: true
};

StyledCarouselItemContainer.displayName = 'StyledCarouselItemContainer';

export default CarouselItem;
