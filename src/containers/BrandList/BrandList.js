import { string } from 'prop-types';
import styled from 'styled-components';
import { fontSizes, colors, calcRem } from 'theme/theme';
import BrandItem from 'components/BrandItem/BrandItem';

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  border-bottom: ${calcRem(1)} solid ${colors.lightGray};
  padding: ${calcRem(75)} 0;
  text-align: center;
  justify-content: center;
`;

const StyledTitle = styled.h2`
  color: ${colors.red_05};
  font-size: ${fontSizes.titleBase};
  font-weight: 700;
  margin-bottom: ${calcRem(50)};
`;

const StyledList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  max-width: ${calcRem(1200)};
  margin: auto;
  padding-left: ${calcRem(20)};
`;

const BrandList = ({ title, type, wheelList, tireList, ...restProps }) => {
  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledList>
        {type === 'wheel'
          ? wheelList.map((item, idx) => (
              <BrandItem
                key={idx}
                id={item.id}
                name="wheelList"
                value={item.value}
                src={item.src}
                checked={item.active}
                {...restProps}
              />
            ))
          : tireList.map((item, idx) => (
              <BrandItem
                key={idx}
                id={item.id}
                value={item.value}
                name="tireList"
                src={item.src}
                checked={item.active}
                {...restProps}
              />
            ))}
      </StyledList>
    </StyledContainer>
  );
};

BrandList.propTypes = {
  title: string
};

BrandList.defaultProps = {
  title: 'Feature Tire Brands'
};

BrandList.displayName = 'BrandList';

export default BrandList;
