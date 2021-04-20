/* eslint-disable import/no-anonymous-default-export */
import MainServiceCarousel from './MainServiceCarousel';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '../../styles/GlobalStyle';

export default {
  title: 'LVPS/Container/MainServiceCarousel',
  component: MainServiceCarousel,
  parameters: {
    docs: {
      description: {
        component: 'MainServiceCarousel Container입니다.'
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
    <MainServiceCarousel {...args} />
  </BrowserRouter>
);

//스토리 구성 객체 기본 내보내기
export const DefaultMainServiceCarousel = Template.bind({});
