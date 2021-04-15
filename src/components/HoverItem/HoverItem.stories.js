/* eslint-disable import/no-anonymous-default-export */
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from 'theme/theme';
import GlobalStyle from 'styles/GlobalStyle';
import HoverItem from './HoverItem';

export default {
  title: 'LVPS/Component/HoverItem',
  component: HoverItem,
  parameters: {
    docs: {
      description: {
        component: '객체를 받아 랜더링하는 HoverBox의 item 컴포넌트입니다.'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=949%3A141'
    }
  },
  argTypes: {
    item: {
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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HoverItem {...args}></HoverItem>
    </ThemeProvider>
  </BrowserRouter>
);

//스토리 구성 객체 기본 내보내기
export const HoverNormal = Template.bind({});

HoverNormal.args = {
  id: 1,
  value: 'Ceramic Pro',
  to: '/'
};
