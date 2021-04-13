import React from 'react';
import { func, array } from 'prop-types';
import styled from 'styled-components';
import { calcRem } from 'theme/theme';
import AccordionItem from 'components/AccodionItem/AccordionItem';

const AccordionContainer = styled.ul`
  li + li {
    margin-top: ${calcRem(5)};
  }
`;

const AccordionList = ({ accordion, handleClick }) => {
  return (
    <AccordionContainer>
      {accordion.map(item => (
        <AccordionItem key={item.id} item={item} onClick={handleClick} />
      ))}
    </AccordionContainer>
  );
};

AccordionList.propTypes = {
  accordion: array,
  handleClick: func
};

AccordionContainer.displayName = 'AccordionContainer';

export default AccordionList;
