/* eslint-disable import/no-anonymous-default-export */
import ErrorMessage from './ErrorMessage';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '../../styles/GlobalStyle';

export default {
  title: 'LVPS/Container/ErrorMessage',
  component: ErrorMessage,
  parameters: {
    docs: {
      description: {
        component: '404 Not Found 페이지의 메세지 박스입니다.'
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
    <ErrorMessage {...args} />
  </BrowserRouter>
);

//스토리 구성 객체 기본 내보내기
export const ErrorMessageContainer = Template.bind({});
