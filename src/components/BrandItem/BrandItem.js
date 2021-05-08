import { oneOf } from 'prop-types';
import styled from 'styled-components';
import { calcRem, calcInterval, colors } from 'theme/theme';
import { useDispatch } from 'react-redux';
import { wheelAndTiretoggleActive } from 'store/modal/wheelAndTire';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const modeSize = {
  wheel: {
    width: `${calcRem(175)}`,
    height: 'auto'
  },
  tire: {
    width: `${calcRem(150)}`,
    height: 'auto'
  }
};

const StyledImg = styled(LazyLoadImage)`
  width: 100%;
  height: auto;
`;

const StyledLabel = styled.label`
  display: block;
  width: 100%;
  position: relative;
  /* text-align: center; */
  border: 6px solid transparent;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
  }
`;

const StyledCheckbox = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  :checked + label {
    border-color: ${colors.red_05};
  }
`;

const StyledItem = styled.li`
  ${({ size }) => modeSize[size]};
  position: relative;
  margin: ${calcInterval([15, 10])};
  box-sizing: content-box;
`;

const ImgComp = ({ src, value }) => {
  return <StyledImg src={src} alt={value}></StyledImg>;
};

const InputComp = ({ id, value, src, checked, name }) => {
  const dispatch = useDispatch();
  return (
    <>
      <StyledCheckbox
        type="checkbox"
        id={id}
        value={value}
        onChange={() => dispatch(wheelAndTiretoggleActive(id, name))}
        checked={checked}
      />
      <StyledLabel htmlFor={id} aria-label={value}>
        <LazyLoadImage src={src} alt={value} />
      </StyledLabel>
    </>
  );
};

const modeComp = {
  image: ImgComp,
  checkbox: InputComp
};

const BrandItem = ({ mode, size, ...restProps }) => {
  const Comp = modeComp[mode];
  return (
    <StyledItem size={size}>
      <Comp {...restProps}></Comp>
    </StyledItem>
  );
};

BrandItem.propTypes = {
  mode: oneOf(['image', 'checkbox']).isRequired,
  size: oneOf(['wheel', 'tire'])
};

BrandItem.defaultProps = {
  mode: 'checkbox',
  size: 'tire'
};

BrandItem.displayName = 'BrandItem';

export default BrandItem;
