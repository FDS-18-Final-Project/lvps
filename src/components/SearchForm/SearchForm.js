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

  @media only screen and (max-width: 870px) {
    align-items: center;
  }
`;

const SearchForm = ({ onClick, mobile, ...restProps }) => {
  return (
    <motion.form style={{ width: '100%' }} {...restProps}>
      <StyledFieldset>
        <A11yHidden as="legend">검색 폼</A11yHidden>
        <Input
          height={30}
          label={
            mobile ? null : (
              <Icon
                type="searchWhite"
                color={colors.lightGray}
                width={calcRem(25)}
              />
            )
          }
        >
          Service Search
        </Input>
        <Icon
          type={mobile ? 'searchWhite' : 'close'}
          color={colors.lightGray}
          width={calcRem(25)}
          onClick={mobile ? null : onClick}
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
