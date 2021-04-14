import { number, string } from 'prop-types';
import styled from 'styled-components';
import { colors, calcRem, calcInterval } from 'theme/theme';

const changeStringToArray = value => value.split(' ');

const StyledDivider = styled.div`
  width: ${({ width }) => calcRem(width)};
  height: ${({ height }) => calcRem(height)};
  margin: ${({ margin }) => calcInterval(changeStringToArray(margin))};
  background-color: ${({ color }) => color};
`;

const Divider = ({ width, height, margin, bgColor, ...restProps }) => {
  return (
    <StyledDivider
      width={width}
      height={height}
      margin={margin}
      color={bgColor}
      {...restProps}
    />
  );
};

Divider.propTypes = {
  width: number,
  height: number,
  margin: string,
  bgColor: string
};

Divider.defaultProps = {
  width: 110,
  height: 4,
  margin: '45 0',
  bgColor: colors.lightGray
};

Divider.displayName = 'Divider';

export default Divider;
