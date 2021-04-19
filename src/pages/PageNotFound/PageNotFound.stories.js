/* eslint-disable import/no-anonymous-default-export */
import PageNotFound from './PageNotFound';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '../../styles/GlobalStyle';

export default {
  title: 'LVPS/Pages/PageNotFound',
  component: PageNotFound,
  parameters: {
    docs: {
      description: {
        component: '잘못된 URL로 접근시 나타나는 404 Not Found 페이지입니다.'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/EKoyu2bLwgDjnAIHQrCwn9/LVPS-Renewal?node-id=134%3A481'
    }
  }
};

//template 만들기
const Template = args => (
  <BrowserRouter>
    <GlobalStyle />
    <PageNotFound {...args} />
  </BrowserRouter>
);

//스토리 구성 객체 기본 내보내기
export const PageNotFoundPage = Template.bind({});
