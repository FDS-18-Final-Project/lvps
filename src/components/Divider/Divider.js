import styled from 'styled-components';
import { colors, calcRem } from 'theme/theme';
import { string } from 'prop-types';

const StyledDivider = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  background-color: ${({ color }) => color};
`;

const Divider = ({
  width,
  height,
  bgColor,
  marginTop,
  marginBottom,
  ...restProps
}) => {
  return (
    <StyledDivider
      width={width}
      height={height}
      color={bgColor}
      marginTop={marginTop}
      marginBottom={marginBottom}
      {...restProps}
    />
  );
};

Divider.propTypes = {
  width: string,
  height: string,
  color: string,
  marginTop: string,
  marginBottom: string
};

Divider.defaultProps = {
  width: '110px',
  height: '4px',
  bgColor: colors.lightGray,
  marginTop: calcRem(45),
  marginBottom: calcRem(45)
};

Divider.displayName = 'Divider';

export default Divider;
