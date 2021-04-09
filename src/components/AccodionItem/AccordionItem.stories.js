/* eslint-disable import/no-anonymous-default-export */
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme/theme';
import AccordionItem from 'components/AccodionItem/AccordionItem';
import GlobalStyle from '../../styles/GlobalStyle';

export default {
  title: 'MMAuto/Component/AccodionItem',
  component: AccordionItem,
  parameters: {
    docs: {
      description: {
        component: '객체를 받아 랜더링하는 Accodion list의 Accodion item 컴포넌트입니다.'
      }
    }
  },
  argTypes: {
    item: {
      control: {
        type: 'string',
        options: [
          {
            id: 1,
            title: 'Ceramic Coating',
            description: [
              'Quality Protection',
              'ServicesQuality Protection',
              'ServicesQuality Protection',
              'Services'
            ],
            active: true
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
      <AccordionItem {...args}></AccordionItem>
    </ThemeProvider>
  </BrowserRouter>
);

//스토리 구성 객체 기본 내보내기

export const Accondion = Template.bind({});

Accondion.args = {
  item: {
    id: 1,
    title: 'Ceramic Coating',
    description: [
      'Quality Protection',
      'ServicesQuality Protection',
      'ServicesQuality Protection',
      'Services'
    ],
    active: false
  }
};

export const AccondionActive = Template.bind({});

AccondionActive.args = {
  item: {
    id: 1,
    title: 'Ceramic Coating',
    description: [
      'Quality Protection',
      'ServicesQuality Protection',
      'ServicesQuality Protection',
      'Services'
    ],
    active: true
  }
};
