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
        <li key={idx} onClick={() => handleClick(idx + 1)}>
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
  /** 인디케이터 길이를 위한 컨텐츠 */
  contents: array.isRequired,
  /** 현재 active */
  current: number,
  /** onChange 메서드 */
  onChange: func
};

Indicator.defaultProps = {
  contents: [],
  current: 0
};

StyledIndicatorItem.displayName = 'StyledIndicatorItem';

export default Indicator;
