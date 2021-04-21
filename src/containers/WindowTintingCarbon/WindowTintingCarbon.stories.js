import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyle';
import WindowTintingCarbon from './WindowTintingCarbon';

//스토리 구성 객체
export default {
  title: ' LVPS/Container/WindowTintingCarbon',
  components: WindowTintingCarbon,
  parameters: {
    docs: {
      description: {
        component: 'Window Tinting Carbon 컨테이너 입니다.'
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
    <WindowTintingCarbon {...args}></WindowTintingCarbon>
  </BrowserRouter>
);

export const WindowTintingCarbonBlock = Template.bind({});

WindowTintingCarbonBlock.storyName = 'Window Tinting Carbon 컨테이너';
