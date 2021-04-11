import Icon from 'components/Icon/Icon';
import Input from 'components/Input/Input';
import React from 'react';
import styled from 'styled-components';
import theme from 'theme/theme';
import { A11yHidden } from '..';
import { motion } from 'framer-motion';

const StyledFieldset = styled.fieldset`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;

  label {
    align-items: flex-end;
  }
  input {
    background: ${theme.colors.black};
    border: none;
    border-bottom: 1px solid ${theme.colors.lightGray};
    margin: 0 25px;
  }
`;

const SearchForm = ({ onClick, ...restProps }) => {
  return (
    <motion.form {...restProps}>
      <StyledFieldset>
        <A11yHidden as="legend">검색 폼</A11yHidden>
        <Input
          width="559px"
          height="50px"
          label={
            <Icon
              type="searchWhite"
              color={theme.colors.lightGray}
              width="30px"
            />
          }
        >
          Service Search
        </Input>
        <Icon
          type="close"
          color={theme.colors.lightGray}
          width="30px"
          onClick={onClick}
        />
      </StyledFieldset>
    </motion.form>
  );
};

export default SearchForm;
