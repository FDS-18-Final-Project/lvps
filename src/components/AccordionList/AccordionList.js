import React from 'react';
import { func, array, number } from 'prop-types';
import styled from 'styled-components';
import { calcRem } from 'theme/theme';
import AccordionItem from 'components/AccodionItem/AccordionItem';

const AccordionContainer = styled.ul`
  li + li {
    margin-top: ${calcRem(5)};
  }
`;

const AccordionList = ({ accordion, handleClick, maxWidth, variant }) => {
  return (
    <AccordionContainer>
      {accordion.map(item => (
        <AccordionItem
          key={item.id}
          item={item}
          onClick={handleClick}
          maxWidth={maxWidth}
          variant={variant}
        />
      ))}
    </AccordionContainer>
  );
};

AccordionList.propTypes = {
  /** 아코디언 아이템 배열 */
  accordion: array,
  /** 클릭이벤트 함수 */
  handleClick: func,
  /** 최대 넓이 지정 */
  maxWidth: number,
  /** framer motion 애니메이션 함수 */
  variant: func
};

AccordionContainer.displayName = 'AccordionContainer';

export default AccordionList;
