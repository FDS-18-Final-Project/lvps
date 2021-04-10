import styled from "styled-components";
import theme from "theme/theme";
import PropTypes from "prop-types";

const { colors, calcRem } = theme;

const StyledDivider = styled.div`
  width: ${(props) => props.width || "110px"};
  height: ${(props) => props.height || "4px"};
  margin-top: ${(props) => props.marginTop || calcRem(45)};
  margin-bottom: ${(props) => props.marginBottom || calcRem(45)};
  background-color: ${(props) => props.color || colors.lightGray};
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
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string,
};

Divider.defaultProps = {
  width: "110px",
  height: "4px",
  bgColor: "lightGray",
  marginTop: calcRem(45),
  marginBottom: calcRem(45),
};

Divider.displayName = "Divider";

export default Divider;
