import React, { useRef } from 'react';
import { func, bool } from 'prop-types';
import styled from 'styled-components';
import { calcRem, colors, calcInterval, fontSizes, device } from 'theme/theme';
import Icon from 'components/Icon/Icon';
import Input from 'components/Input/Input';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useSearch } from 'hooks/';
import A11yHidden from 'components/A11yHidden/A11yHidden.styled';

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
    margin: ${calcInterval([0, 20])};
    color: ${colors.white};
    font-size: ${fontSizes.xl};
  }

  @media only screen and (max-width: 870px) {
    align-items: center;
  }
`;

const StyledAutoCompleteContainer = styled.ul`
  position: absolute;
  top: 70%;
  background-color: ${colors.white};
  color: ${colors.black};
  margin-top: ${calcRem(8)};
  min-width: 87%;
  font-weight: bold;
  box-sizing: border-box;
  z-index: 10000;

  li {
    padding: ${calcInterval([10, 20])};
    font-size: ${fontSizes.base};
    /* border-radius: ${calcRem(10)}; */
  }

  ${device.desktop} {
    left: 8%;
    min-width: 84%;
    li > a {
      font-size: ${fontSizes.small};
    }
  }

  ${device.tablet} {
    left: 6%;
    min-width: 84%;
  }

  ${device.mobile} {
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
                title="search"
                type="searchWhite"
                color={colors.lightGray}
                width={calcRem(20)}
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
              key={idx}
              style={
                idx === focusIdx ? { backgroundColor: colors.gray_03 } : null
              }
            >
              <StyledLink to={item.link}>{item.keyWord}</StyledLink>
            </li>
          ))}
        </StyledAutoCompleteContainer>

        <Icon
          title={mobile ? 'search' : 'close'}
          button={!mobile}
          type={mobile ? 'searchWhite' : 'close'}
          color={colors.lightGray}
          width={mobile ? calcRem(18) : calcRem(20)}
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
