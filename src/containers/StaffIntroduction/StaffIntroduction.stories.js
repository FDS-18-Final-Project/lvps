/* eslint-disable import/no-anonymous-default-export */
import StaffIntroduction from './StaffIntroduction';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '../../styles/GlobalStyle';

export default {
  title: 'LVPS/Container/StaffIntroduction',
  component: StaffIntroduction,
  parameters: {
    docs: {
      description: {
        component: 'Staff 소개가 있는 StaffIntroduction 컨테이너입니다.'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=861%3A8460'
    }
  }
};

//template 만들기
const Template = args => (
  <BrowserRouter>
    <GlobalStyle />
    <StaffIntroduction {...args} />
  </BrowserRouter>
);

//스토리 구성 객체 기본 내보내기
export const StaffIntroductionContainer = Template.bind({});
