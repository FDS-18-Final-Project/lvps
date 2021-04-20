/* eslint-disable import/no-anonymous-default-export */
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyle';
import NavbarMobileItem from './NavbarMobileItem';

export default {
  title: 'LVPS/Component/NavbarMobileItem',
  component: NavbarMobileItem,
  parameters: {
    docs: {
      description: {
        component:
          '객체를 받아 랜더링하는 Mobile Navigation bar의 item 컴포넌트입니다.'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=510%3A4205'
    }
  },
  argTypes: {
    value: { type: 'string' },
    type: {
      control: 'select',
      options: ['nav', 'service', 'serviceDetail']
    },
    to: { type: 'text' }
  }
};

//template 만들기
const Template = args => (
  <BrowserRouter>
    <GlobalStyle />
    <NavbarMobileItem {...args}></NavbarMobileItem>
  </BrowserRouter>
);

//스토리 구성 객체 기본 내보내기
export const NavbarMobileItemNormal = Template.bind({});

NavbarMobileItemNormal.args = {
  value: 'HOME',
  type: 'nav',
  to: '/'
};
