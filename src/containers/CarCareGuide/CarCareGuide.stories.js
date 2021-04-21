import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyle';
import CarCareGuide from './CarCareGuide';

//스토리 구성 객체
export default {
  title: ' LVPS/Container/CarCareGuide',
  components: CarCareGuide,
  parameters: {
    docs: {
      description: {
        component: '차 케어 가이드 컨테이너 입니다.'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4-%EC%88%98%EC%A0%95?node-id=12%3A356'
    }
  }
};

const Template = args => (
  <BrowserRouter>
    <GlobalStyle />
    <CarCareGuide {...args}></CarCareGuide>
  </BrowserRouter>
);

export const CarCareGuideBlock = Template.bind({});

CarCareGuideBlock.args = {};

CarCareGuideBlock.storyName = '차 케어 가이드 컨테이너';
