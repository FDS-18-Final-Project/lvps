/* eslint-disable import/no-anonymous-default-export */
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyle';
import { NavbarMobileItem } from 'components/';
import NavbarMobile from './NavbarMobile';

export default {
  title: 'LVPS/Component/NavbarMobile',
  component: NavbarMobile,
  parameters: {
    docs: {
      description: {
        component: '배열을 랜더링하는 Mobile Navigation bar 컴포넌트입니다.'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=949%3A141'
    }
  },
  argTypes: {
    NavItems: {
      control: {
        type: 'array',
        seperator: [
          {
            id: 'nav_1',
            value: 'HOME',
            type: 'nav',
            to: '/'
          },
          {
            id: 'nav_2',
            value: 'ABOUT',
            type: 'nav',
            to: '/'
          },
          {
            id: 'nav_3',
            value: 'SERVICES',
            type: 'nav',
            to: '/'
          },
          {
            id: 'service_1',
            value: 'Ceramic Coating',
            type: 'service',
            to: '/'
          },
          {
            id: 'coating_1',
            value: 'Ceramic Pro',
            type: 'serviceDetail',
            to: '/'
          },
          {
            id: 'coating_2',
            value: 'IGL Coatings',
            type: 'serviceDetail',
            to: '/'
          },
          {
            id: 'service_2',
            value: 'Paint Protection Film',
            type: 'service',
            to: '/'
          },
          {
            id: 'service_3',
            value: 'Window Tinting',
            type: 'service',
            to: '/'
          },
          {
            id: 'service_4',
            value: 'Detailing & Paint Correction',
            type: 'service',
            to: '/'
          },
          {
            id: 'service_5',
            value: 'Wheel & Tire',
            type: 'service',
            to: '/'
          },
          {
            id: 'nav_4',
            value: 'GET A QUOTE',
            type: 'nav',
            to: '/'
          },
          {
            id: 'nav_5',
            value: 'CONTACT US',
            type: 'nav',
            to: '/'
          }
        ]
      }
    }
  }
};

//template 만들기
const Template = args => (
  <BrowserRouter>
    <GlobalStyle />
    <NavbarMobile>
      {args.map(item => {
        return (
          <NavbarMobileItem
            id={item.id}
            value={item.value}
            type={item.type}
            to={item.to}
          ></NavbarMobileItem>
        );
      })}
    </NavbarMobile>
  </BrowserRouter>
);

//스토리 구성 객체 기본 내보내기
export const NavbarMobileNormal = Template.bind({});

NavbarMobileNormal.args = [
  {
    id: 'nav_1',
    value: 'HOME',
    type: 'nav',
    to: '/'
  },
  {
    id: 'nav_2',
    value: 'ABOUT',
    type: 'nav',
    to: '/'
  },
  {
    id: 'nav_3',
    value: 'SERVICES',
    type: 'nav',
    to: '/'
  },
  {
    id: 'service_1',
    value: 'Ceramic Coating',
    type: 'service',
    to: '/'
  },
  {
    id: 'coating_1',
    value: 'Ceramic Pro',
    type: 'serviceDetail',
    to: '/'
  },
  {
    id: 'coating_2',
    value: 'IGL Coatings',
    type: 'serviceDetail',
    to: '/'
  },
  {
    id: 'service_2',
    value: 'Paint Protection Film',
    type: 'service',
    to: '/'
  },
  {
    id: 'service_3',
    value: 'Window Tinting',
    type: 'service',
    to: '/'
  },
  {
    id: 'service_4',
    value: 'Detailing & Paint Correction',
    type: 'service',
    to: '/'
  },
  {
    id: 'service_5',
    value: 'Wheel & Tire',
    type: 'service',
    to: '/'
  },
  {
    id: 'nav_4',
    value: 'GET A QUOTE',
    type: 'nav',
    to: '/'
  },
  {
    id: 'nav_5',
    value: 'CONTACT US',
    type: 'nav',
    to: '/'
  }
];
