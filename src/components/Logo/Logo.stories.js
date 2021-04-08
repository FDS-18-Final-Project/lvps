/* eslint-disable import/no-anonymous-default-export */
import Logo from './Logo';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from 'theme/theme';

export default {
  title: 'MMAuto/Component/Logo',
  component: Logo,
  parameters: {
    docs: {
      description: {
        component:
          '**Home**으로 이동할 수 있는 Logo 컴포넌트입니다. tag로 h1, h2, h3을 전달할 수 있습니다. width로 크기조절 가능',
      },
    },
  },
  argTypes: {
    tag: {
      control: {
        type: 'radio',
        options: ['h1', 'h2', 'h3'],
      },
    },
    maxWidth: {
      control: { type: 'range', min: 50, max: 300, step: 10 },
    },
  },
};

//template 만들기
const Template = (args) => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Logo {...args}></Logo>
    </ThemeProvider>
  </BrowserRouter>
);

//스토리 구성 객체 기본 내보내기
export const LogoH1 = Template.bind({});

LogoH1.args = {
  tag: 'h1',
  maxWidth: 200,
};

export const LogoH2 = Template.bind({});

LogoH2.args = {
  tag: 'h2',
  maxWidth: 150,
};
export const LogoH3 = Template.bind({});

LogoH3.args = {
  tag: 'h3',
  maxWidth: 100,
};
