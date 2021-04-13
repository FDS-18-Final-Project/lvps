import React from 'react';
import { func } from 'prop-types';
import styled from 'styled-components';
import { calcRem, colors, calcInterval, fontSizes } from 'theme/theme';
import Icon from 'components/Icon/Icon';
import Input from 'components/Input/Input';
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
          width={400}
          height={30}
          label={
            <Icon
              type="searchWhite"
              color={colors.lightGray}
              width={calcRem(25)}
            />
          }
        >
          Service Search
        </Input>
        <Icon
          type="close"
          color={colors.lightGray}
          width={calcRem(25)}
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
