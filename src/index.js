import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './app/App';
// style
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import theme from './utils/theme';
//redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import appReducers from './store';

//web accessbility
import { autoA11yTest } from './utils/autoA11yTest';

// 한국어 출력
autoA11yTest();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const ReduxStore = createStore(
  appReducers,
  composeEnhancers(applyMiddleware(promiseMiddleware))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ReduxStore}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <App></App>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
