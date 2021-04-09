import styled from 'styled-components';
import theme from 'theme/theme';

const { fontSizes, interval } = theme;

const CarouselItemWrapper = styled.li`
  width: 100%;
  font-size: ${fontSizes.lg};
  text-align: center;
  /* padding: 0 100px; */
  background: green;
  border-right: 1px solid black;

  p {
    color: ${({ colors }) => colors.main};
    width: 916px;
    height: 350px;
    line-height: 54px;
    margin-bottom: ${interval.base};
  }

  span {
    margin-bottom: 15px;
    display: block;
    color: ${({ colors }) => colors.sub};
  }
`;

const CarouselItem = ({ name, model, children, colors, ...restProps }) => {
  return (
    <CarouselItemWrapper colors={colors} {...restProps}>
      <p>{children}</p>
      <span aria-label="writer">{name}</span>
      <span aria-label="model name">{model}</span>
    </CarouselItemWrapper>
  );
};

export default CarouselItem;
