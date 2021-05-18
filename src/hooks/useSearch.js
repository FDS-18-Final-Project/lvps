import { useReducer, useCallback, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router';

const searchList = [
  { keyWord: 'Get a Quote', link: '/get-a-quote' },
  { keyWord: 'About Us', link: '/about-us' },
  { keyWord: 'Ceramic Coating', link: '/ceramic-coating' },
  { keyWord: 'Ceramic Coating > IGL Coatings', link: '/igl-coatings' },
  { keyWord: 'Paint Protection Film', link: '/paint-protection' },
  { keyWord: 'Window Tinting', link: '/window-tinting' },
  {
    keyWord: 'Detailing & Paint Correction',
    link: '/detailing-and-correction'
  },
  { keyWord: 'Wheel & Tire', link: '/wheel-and-tire' },
  { keyWord: 'FAQ', link: '/faq' },
  { keyWord: 'Contact Us', link: '/contact-us' }
];

const initialSearchState = {
  value: '',
  results: [],
  focusIdx: 0
};

const searchReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return { ...state, value: action.value, results: action.results };
    case 'KEYDOWN':
      return { ...state, focusIdx: action.focusIdx };
    default:
      alert('Unhandled action type: ' + action.type);
  }
};

const useSearch = inputRef => {
  const [state, dispatch] = useReducer(searchReducer, initialSearchState);
  const { results, focusIdx } = state;
  const { pathname } = useLocation();
  const history = useHistory();

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
        if (!results[focusIdx]) {
          alert('Results not found');
          return;
        }
        history.push(results[focusIdx].link);
        dispatch({ type: 'CHANGE', value: '', results: [] });
      }

      if (e.key === 'Escape') {
        inputRef.current.value = '';
        dispatch({ type: 'CHANGE', value: '', results: [] });
      }
    },
    [focusIdx, history, inputRef, results]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [handleKeydown]);

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  useEffect(() => {
    inputRef.current.value = '';
    dispatch({ type: 'CHANGE', value: '', results: [] });
  }, [inputRef, pathname]);

  return { state, handleChange, handleKeydown };
};

export default useSearch;
