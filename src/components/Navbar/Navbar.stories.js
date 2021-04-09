/* eslint-disable import/no-anonymous-default-export */
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme/theme';

export default {
  title: 'MMAuto/Component/Navbar',
  component: Navbar,
  parameters: {
    docs: {
      description: {
        component: '각 링크로 이동할 수 있는 Navigation 입니다. flex style을 받을 수 있습니다.'
      }
    }
  },
  argTypes: {
    direction: {
      control: {
        type: 'radio',
        options: ['row', 'column']
      }
    },
    justify: {
      control: {
        type: 'radio',
        options: ['center', 'space-between', 'space-around', 'flex-start', 'flex-end']
      }
    },
    align: {
      control: {
        type: 'radio',
        options: ['center', 'space-between', 'space-around', 'flex-start', 'flex-end']
      }
    }
  }
};

//template 만들기
const Template = args => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Navbar {...args}></Navbar>
    </ThemeProvider>
  </BrowserRouter>
);

//스토리 구성 객체 기본 내보내기
export const NavbarRow = Template.bind({});

NavbarRow.args = {
  direction: 'row',
  justify: 'space-between',
  align: 'center'
};

export const NavbarColumn = Template.bind({});

NavbarColumn.args = {
  direction: 'column',
  justify: 'center',
  align: 'space-between'
};
