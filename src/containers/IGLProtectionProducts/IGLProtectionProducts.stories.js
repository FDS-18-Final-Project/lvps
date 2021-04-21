import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyle';
import IGLProtectionProducts from './IGLProtectionProducts';

//스토리 구성 객체
export default {
  title: ' LVPS/Container/IGLProtectionProducts',
  components: IGLProtectionProducts,
  parameters: {
    docs: {
      description: {
        component: 'IGL Protection Products 컨테이너 입니다.'
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
    <IGLProtectionProducts {...args}></IGLProtectionProducts>
  </BrowserRouter>
);

export const IGLProtectionProductssBlock = Template.bind({});

IGLProtectionProductssBlock.args = {};

IGLProtectionProductssBlock.storyName = 'IGL Protection Products 컨테이너';
