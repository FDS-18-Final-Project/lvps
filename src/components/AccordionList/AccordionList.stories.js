/* eslint-disable import/no-anonymous-default-export */
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AccordionItem from 'components/AccodionItem/AccordionItem';
import GlobalStyle from '../../styles/GlobalStyle';
import AccordionList from './AccordionList';
import theme from 'theme/theme';

export default {
  title: 'LVPS/Component/AccordionList',
  component: AccordionList,
  parameters: {
    docs: {
      description: {
        component:
          '배열을 받아 AccordionItem 컴포넌트로 이루어진 리스르를 만들어주는 AccordionList 컴포넌트입니다.'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=233%3A2548'
    }
  },
  argTypes: {
    accordion: {
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
          },
          {
            id: 2,
            title: 'Paint Protection Film',
            description: [
              'Quality Protection',
              'ServicesQuality Protection',
              'ServicesQuality Protection',
              'Services'
            ],
            active: false
          },
          {
            id: 3,
            title: 'Window Tinting',
            description: [
              'Quality Protection',
              'ServicesQuality Protection',
              'ServicesQuality Protection',
              'Services'
            ],
            active: false
          },
          {
            id: 4,
            title: 'Detail Correction',
            description: [
              'Quality Protection',
              'ServicesQuality Protection',
              'ServicesQuality Protection',
              'Services'
            ],
            active: false
          },
          {
            id: 5,
            title: 'Ceramic Coating',
            description: [
              'Quality Protection',
              'ServicesQuality Protection',
              'ServicesQuality Protection',
              'Services'
            ],
            active: false
          }
        ]
      }
    }
  }
};

const accordionState = [
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
  },
  {
    id: 2,
    title: 'Paint Protection Film',
    description: [
      'Quality Protection',
      'ServicesQuality Protection',
      'ServicesQuality Protection',
      'Services'
    ],
    active: false
  },
  {
    id: 3,
    title: 'Window Tinting',
    description: [
      'Quality Protection',
      'ServicesQuality Protection',
      'ServicesQuality Protection',
      'Services'
    ],
    active: false
  },
  {
    id: 4,
    title: 'Detail Correction',
    description: [
      'Quality Protection',
      'ServicesQuality Protection',
      'ServicesQuality Protection',
      'Services'
    ],
    active: false
  },
  {
    id: 5,
    title: 'Ceramic Coating',
    description: [
      'Quality Protection',
      'ServicesQuality Protection',
      'ServicesQuality Protection',
      'Services'
    ],
    active: false
  }
];

//template 만들기
const Template = args => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AccordionList {...args}>
        {args.accordion.map(item => (
          <AccordionItem item={item} key={item.id} />
        ))}
      </AccordionList>
    </ThemeProvider>
  </BrowserRouter>
);

//스토리 구성 객체 기본 내보내기

export const AccondionList = Template.bind({});

AccondionList.args = {
  accordion: accordionState
};
