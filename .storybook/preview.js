// style
import GlobalStyle from '../src/styles/GlobalStyle';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import appReducers from '../src/store/index';
import logger from 'redux-logger';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  appReducers,
  composeEnhancers(applyMiddleware(promiseMiddleware, logger))
);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};

export const decorators = [
  Story => {
    console.log(store);
    return (
      <>
        <Provider store={store}>
          <GlobalStyle />
          <Story />
        </Provider>
      </>
    );
  }
];

// export hideArgType = {
//   disabled: true,

// }
