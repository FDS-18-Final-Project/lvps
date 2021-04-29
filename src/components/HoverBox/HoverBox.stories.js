/* eslint-disable import/no-anonymous-default-export */
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '../../styles/GlobalStyle';
import HoverItem from 'components/HoverItem/HoverItem';
import HoverBox from './HoverBox';

export default {
  title: 'LVPS/Component/HoverBox',
  component: HoverBox,
  parameters: {
    docs: {
      description: {
        component:
          '배열을 받아 HoverItem 컴포넌트로 이루어진 리스르를 만들어주는 AccordionList 컴포넌트입니다.'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=949%3A174'
    }
  },
  argTypes: {
    hoverBox: {
      control: {
        type: 'string',
        options: [
          {
            id: 1,
            value: 'Ceramic Pro',
            to: '/'
          },
          {
            id: 2,
            value: 'Paint Protection Film',
            to: '/'
          },
          {
            id: 3,
            value: 'Window Tinting',
            to: '/'
          },
          {
            id: 4,
            value: 'Professional Detailing & Paint Correction',
            to: '/'
          },
          {
            id: 5,
            value: 'Wheels & Tires',
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
    <HoverBox {...args}>
      {args.hoverBox.map(item => (
        <HoverItem key={item.id} value={item.value} to={item.to} />
      ))}
    </HoverBox>
  </BrowserRouter>
);

//스토리 구성 객체 기본 내보내기

export const HoverBoxNormal = Template.bind({});

HoverBoxNormal.args = {
  type: 'string',
  hoverBox: [
    {
      id: 1,
      value: 'Ceramic Pro',
      to: '/'
    },
    {
      id: 2,
      value: 'Paint Protection Film',
      to: '/'
    },
    {
      id: 3,
      value: 'Window Tinting',
      to: '/'
    },
    {
      id: 4,
      value: 'Professional Detailing & Paint Correction',
      to: '/'
    },
    {
      id: 5,
      value: 'Wheels & Tires',
      to: '/'
    }
  ]
};
