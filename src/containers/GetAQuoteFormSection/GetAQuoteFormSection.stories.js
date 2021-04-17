/* eslint-disable import/no-anonymous-default-export */
import GetAQuoteFormSection from './GetAQuoteFormSection';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '../../styles/GlobalStyle';
import logger from 'redux-logger';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createStore, applyMiddleware, compose } from 'redux';
import appReducers from 'store';
import { Provider } from 'react-redux';
// 한국어 출력

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const ReduxStore = createStore(
  appReducers,
  composeEnhancers(applyMiddleware(logger))
);
export default {
  title: 'LVPS/Container/GetAQuoteFormSection',
  component: GetAQuoteFormSection,
  parameters: {
    docs: {
      description: {
        component: 'GetAQuoteFormSection 컨테이너입니다.'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=172%3A3347'
    }
  }
};

//template 만들기
const Template = args => (
  <BrowserRouter>
    <GlobalStyle />
    <Provider store={ReduxStore}>
      <GetAQuoteFormSection {...args} />
    </Provider>
  </BrowserRouter>
);

//스토리 구성 객체 기본 내보내기
export const GetAQuoteFormSectionContainer = Template.bind({});
