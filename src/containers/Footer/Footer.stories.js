import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyle';
import Footer from './Footer';

export default {
  title: 'LVPS/Container/Footer',
  component: Footer,
  parameters: {
    docs: {
      description: {
        component: '**Footer** 컨테이너는 각 페이지의 footer section 입니다.'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=34%3A68'
    }
  }
};

const Template = args => (
  <BrowserRouter>
    <GlobalStyle />
    <Footer {...args} />
  </BrowserRouter>
);

export const FooterBlock = Template.bind({});

FooterBlock.args = {
  children: [<Footer.Logo />, <Footer.Content />]
};

FooterBlock.storyName = 'Footer 컨테이너';
