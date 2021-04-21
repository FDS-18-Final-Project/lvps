import { array, number, func } from 'prop-types';
import styled from 'styled-components';
import { calcRem } from 'theme/theme';
import Layout from 'pages/Layout/Layout';

const StyledIndicatorItem = styled.button`
  width: ${calcRem(15)};
  height: ${calcRem(15)};
  border-radius: 50%;
  color: gray;
  margin-right: ${calcRem(15)};
  cursor: pointer;
  border: none;
  outline: none;
  background-color: ${({ selected }) => (selected ? 'red' : 'gray')};
  margin-top: ${calcRem(30)};
`;

const Indicator = ({ contents, current, onChange, ...restProps }) => {
  const handleClick = idx => {
    onChange(idx);
  };

  return (
    <Layout.FlexContainer tag="ul" align="flex-start" {...restProps}>
      {contents.map((_, idx) => (
        <li key={Math.random()} onClick={() => handleClick(idx + 1)}>
          <StyledIndicatorItem
            aria-label={`indicator-${idx}`}
            selected={current === idx}
          ></StyledIndicatorItem>
        </li>
      ))}
    </Layout.FlexContainer>
  );
};

Indicator.propTypes = {
  contents: array.isRequired,
  current: number,
  onChange: func
};

Indicator.defaultProps = {
  contents: [],
  current: 0
};

StyledIndicatorItem.displayName = 'StyledIndicatorItem';

export default Indicator;
