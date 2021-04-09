import styled from 'styled-components';

const IndicatorWrapper = styled.ul`
  display: flex;
  flex-flow: row nowrap;
`;

const ItemButton = styled.button`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  color: gray;
  margin-right: 15px;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: ${({ selected }) => (selected ? 'red' : 'gray')};
`;

const Indicator = ({ reviews, current, onChange, ...restProps }) => {
  const handleClick = (idx) => {
    onChange(idx);
  };

  return (
    <IndicatorWrapper {...restProps}>
      {reviews.map((review, idx) => (
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
