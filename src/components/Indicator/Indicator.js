import styled from 'styled-components';
import theme from 'theme/theme';

const { calcRem } = theme;

const IndicatorWrapper = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;

const ItemButton = styled.button`
  width: ${calcRem(15)};
  height: ${calcRem(15)};
  border-radius: 50%;
  color: gray;
  margin-right: ${calcRem(15)};
  cursor: pointer;
  border: none;
  outline: none;
  background-color: ${({ selected }) => (selected ? 'red' : 'gray')};
`;

const Indicator = ({ contents, current, onChange, ...restProps }) => {
  const handleClick = (idx) => {
    onChange(idx);
  };

  return (
    <IndicatorWrapper {...restProps}>
      {contents.map((review, idx) => (
        <li key={review.id} onClick={() => handleClick(idx)}>
          <ItemButton
            aria-label={`indicator-${idx}`}
            selected={current === idx}
          ></ItemButton>
        </li>
      ))}
    </IndicatorWrapper>
  );
};

export default Indicator;
