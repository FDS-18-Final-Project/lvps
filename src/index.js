import React from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './app/App';
// style
import GlobalStyle from 'styles/GlobalStyle';

//redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import appReducers from './store';
import logger from 'redux-logger';

//web accessbility
//import { autoA11yTest } from './utils/autoA11yTest';

// SEO
import { HelmetProvider } from 'react-helmet-async';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  appReducers,
  composeEnhancers(applyMiddleware(promiseMiddleware, logger))
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <HelmetProvider>
//         <GlobalStyle />
//         <Router>
//           <App />
//         </Router>
//       </HelmetProvider>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <Provider store={store}>
        <HelmetProvider>
          <GlobalStyle />
          <Router>
            <App />
          </Router>
        </HelmetProvider>
      </Provider>
    </React.StrictMode>,
    rootElement
  );
} else {
  render(
    <React.StrictMode>
      <Provider store={store}>
        <HelmetProvider>
          <GlobalStyle />
          <Router>
            <App />
          </Router>
        </HelmetProvider>
      </Provider>
    </React.StrictMode>,
    rootElement
  );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
