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
  accordion: array,
  handleClick: func,
  maxWidth: number
};

AccordionContainer.displayName = 'AccordionContainer';

export default AccordionList;
