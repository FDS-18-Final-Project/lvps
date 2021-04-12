import Icon from 'components/Icon/Icon';
import Input from 'components/Input/Input';
import React from 'react';
import styled from 'styled-components';
import { calcRem, colors, calcInterval, fontSizes } from 'theme/theme';
import { A11yHidden } from '..';
import { motion } from 'framer-motion';
import { func } from 'prop-types';

const StyledFieldset = styled.fieldset`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;

  label {
    align-items: flex-end;
  }

  input {
    background: ${colors.black};
    border: none;
    border-bottom: 1px solid ${colors.lightGray};
    padding-left: ${calcRem(10)};
    margin: ${calcInterval([0, 25])};
    color: ${colors.white};
    font-size: ${fontSizes.small};
  }
`;

const SearchForm = ({ onClick, ...restProps }) => {
  return (
    <motion.form {...restProps}>
      <StyledFieldset>
        <A11yHidden as="legend">검색 폼</A11yHidden>
        <Input
          width={559}
          height={50}
          label={
            <Icon
              type="searchWhite"
              color={colors.lightGray}
              width={calcRem(30)}
            />
          }
        >
          Service Search
        </Input>
        <Icon
          type="close"
          color={colors.lightGray}
          width={calcRem(30)}
          onClick={onClick}
        />
      </StyledFieldset>
    </motion.form>
  );
};

SearchForm.propTypes = {
  onClick: func
};

StyledFieldset.displayName = 'FieldSet';

export default SearchForm;
