import React, { useState, useRef, useCallback, useEffect } from 'react';
import { func, bool } from 'prop-types';
import styled from 'styled-components';
import { calcRem, colors, calcInterval, fontSizes } from 'theme/theme';
import Icon from 'components/Icon/Icon';
import Input from 'components/Input/Input';
import { A11yHidden } from '..';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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

const StyledAutoCompleteContainer = styled.ul`
  position: absolute;
  z-index: 100;
  top: 100%;
  background-color: ${colors.white};
  color: ${colors.black};
  margin-top: ${calcRem(8)};
  min-width: 83%;
  font-weight: bold;
  box-sizing: border-box;
  /* padding: ${calcRem(4)}; */

  li {
    padding: ${calcInterval([10, 20])};
    font-size: ${fontSizes.base};
    /* border-radius: ${calcRem(10)}; */
  }

  @media only screen and (max-width: 1200px) {
    left: 10%;
    min-width: 80%;
    li {
      font-size: ${fontSizes.small};
    }
  }

  @media only screen and (max-width: 768px) {
    left: 5%;
    min-width: 84%;
  }
`;

const StyledLink = styled(Link)`
  display: block;
`;

const searchList = [
  { keyWord: 'Get a Quote', link: '/GetAQuote' },
  { keyWord: 'Ceramic Coating > Ceramic Pro', link: '/' },
  { keyWord: 'Ceramic Coating > LVS for your car', link: '/' },
  { keyWord: 'Paint Protection Film', link: '/' },
  { keyWord: 'Detailing & Paint Correction', link: '/' },
  { keyWord: 'Wheel & Tire', link: '/' },
  { keyWord: 'About Us', link: '/' },
  { keyWord: 'FAQ', link: '/' }
];

const SearchForm = ({ onClick, mobile, ...restProps }) => {
  const [value, setValue] = useState('');
  const [results, setResults] = useState([]);
  const [focusIdx, setfocusIdx] = useState(0);

  const inputRef = useRef();

  const matchKeyword = (keyword, value) => {
    return (
      keyword.toLowerCase().substring(0, value.length) === value.toLowerCase()
    );
  };

  const handleChange = e => {
    setValue(inputRef.current.value);

    const item = searchList.filter(item =>
      matchKeyword(item.keyWord, inputRef.current.value)
    );

    setResults(item === [] ? null : item);
  };

  const handleKeydown = useCallback(
    e => {
      if (e.key === 'ArrowUp')
        setfocusIdx(prev => (prev === 0 ? results.length - 1 : prev - 1));
      if (e.key === 'ArrowDown')
        setfocusIdx(prev => (prev === results.length - 1 ? 0 : prev + 1));
      if (e.key === 'Enter') {
        window.location = results[focusIdx].link;
      }
    },
    [focusIdx, results]
  );

  useEffect(() => {
    document.addEventListener('keyup', handleKeydown);
    return () => document.removeEventListener('keyup', handleKeydown);
  }, [focusIdx, handleKeydown, results, results.length]);

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

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
          Service Search
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
  mobile: bool,
  onClick: func
};

StyledFieldset.displayName = 'FieldSet';

export default SearchForm;
