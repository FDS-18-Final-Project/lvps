import { useReducer, useCallback, useEffect } from 'react';

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

const initialSearchState = {
  value: '',
  results: [],
  focusIdx: 0
};

const serachReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return { ...state, value: action.value, results: action.results };
    case 'KEYDOWN':
      return { ...state, focusIdx: action.focusIdx };
    default:
      throw new Error('Unhandled action type: ' + action.type);
  }
};

const useSearch = inputRef => {
  const [state, dispatch] = useReducer(serachReducer, initialSearchState);
  const { results, focusIdx } = state;

  const matchKeyWord = (keyword, value) =>
    keyword.toLowerCase().substring(0, value.length) === value.toLowerCase();

  const handleChange = e => {
    const item = searchList.filter(serchItem =>
      matchKeyWord(serchItem.keyWord, inputRef.current.value)
    );

    dispatch({
      type: 'CHANGE',
      value: inputRef.current.value,
      results: item === [] ? null : item
    });
  };

  const handleKeydown = useCallback(
    e => {
      if (e.key === 'ArrowUp')
        dispatch({
          type: 'KEYDOWN',
          focusIdx: !focusIdx ? results.length - 1 : focusIdx - 1
        });

      if (e.key === 'ArrowDown')
        dispatch({
          type: 'KEYDOWN',
          focusIdx: focusIdx === results.length - 1 ? 0 : focusIdx + 1
        });
      if (e.key === 'Enter') {
        window.location = results[focusIdx].link;
        dispatch({ type: 'CHANGE', value: '', results: [] });
      }
      if (e.key === 'Escape') {
        inputRef.current.value = '';
        dispatch({ type: 'CHANGE', value: '', results: [] });
      }
    },
    [focusIdx, inputRef, results]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [handleKeydown]);

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  return { state, handleChange, handleKeydown };
};

export default useSearch;
