import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyle';
import MainBanner from './MainBanner';

//스토리 구성 객체
export default {
  title: ' LVPS/Container/MainBanner',
  components: MainBanner,
  parameters: {
    docs: {
      description: {
        component: '메인 페이지 배너 컴포넌트입니다.'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4-%EC%88%98%EC%A0%95?node-id=12%3A356'
    }
  },
  argTypes: {
    bgImg: { type: 'text' }
  }
};

const Template = args => (
  <BrowserRouter>
    <GlobalStyle />
    <MainBanner {...args}></MainBanner>
  </BrowserRouter>
);

export const MainBannerBlock = Template.bind({});

MainBannerBlock.args = {
  bgImg: 'assets/dummy_background_02.png'
};

MainBannerBlock.storyName = '메인 배너';
