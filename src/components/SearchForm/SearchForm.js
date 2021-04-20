import React, { useRef } from 'react';
import { func, bool } from 'prop-types';
import styled from 'styled-components';
import { calcRem, colors, calcInterval, fontSizes } from 'theme/theme';
import Icon from 'components/Icon/Icon';
import Input from 'components/Input/Input';
import { A11yHidden } from '..';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import useSearch from 'hooks/useSearch';

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
    font-size: ${fontSizes.xl};
  }

  @media only screen and (max-width: 870px) {
    align-items: center;
  }
`;

const StyledAutoCompleteContainer = styled.ul`
  position: absolute;
  z-index: 100;
  top: 100%;
  background-color: ${colors.white};
  color: ${colors.black};
  margin-top: ${calcRem(8)};
  min-width: 87%;
  font-weight: bold;
  box-sizing: border-box;
  /* padding: ${calcRem(4)}; */

  li {
    padding: ${calcInterval([10, 20])};
    font-size: ${fontSizes.base};
    /* border-radius: ${calcRem(10)}; */
  }

  @media only screen and (max-width: 1200px) {
    left: 8%;
    min-width: 84%;
    li > a {
      font-size: ${fontSizes.small};
    }
  }

  @media only screen and (max-width: 768px) {
    left: 6%;
    min-width: 84%;
  }

  @media only screen and (max-width: 375px) {
    left: 15%;
    min-width: 100%;
  }
`;

const StyledLink = styled(Link)`
  display: block;
`;

const SearchForm = ({ onClick, mobile, ...restProps }) => {
  const inputRef = useRef();
  const { state, handleChange } = useSearch(inputRef);
  const { value, results, focusIdx } = state;

  return (
    <motion.form
      style={{ width: '100%', position: 'relative' }}
      {...restProps}
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <StyledFieldset>
        <A11yHidden as="legend">검색 폼</A11yHidden>
        <Input
          errorMessage={false}
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
          onChange={handleChange}
          value={value}
          ref={inputRef}
        >
          {mobile ? '' : 'Service Search'}
        </Input>
        <StyledAutoCompleteContainer>
          {results.map((item, idx) => (
            <li
              style={
                idx === focusIdx ? { backgroundColor: colors.gray3 } : null
              }
            >
              <StyledLink to={item.link}>{item.keyWord}</StyledLink>
            </li>
          ))}
        </StyledAutoCompleteContainer>

        <Icon
          button={!mobile}
          type={mobile ? 'searchWhite' : 'close'}
          color={colors.lightGray}
          width={mobile ? calcRem(18) : calcRem(25)}
          onClick={mobile ? null : onClick}
        />
      </StyledFieldset>
    </motion.form>
  );
};

SearchForm.propTypes = {
  mobile: bool,
  onClick: func
};

StyledFieldset.displayName = 'FieldSet';

export default SearchForm;
