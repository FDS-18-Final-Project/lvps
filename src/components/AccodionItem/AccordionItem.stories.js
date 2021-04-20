/* eslint-disable import/no-anonymous-default-export */
import { BrowserRouter } from 'react-router-dom';
import AccordionItem from 'components/AccodionItem/AccordionItem';
import GlobalStyle from 'styles/GlobalStyle';
import { colors, calcRem } from 'theme/theme';

export default {
  title: 'LVPS/Component/AccodionItem',
  component: AccordionItem,
  parameters: {
    docs: {
      description: {
        component:
          '객체를 받아 랜더링하는 Accodion list의 Accodion item 컴포넌트입니다.'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=969%3A12255'
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
    <GlobalStyle />
    <AccordionItem {...args}></AccordionItem>
  </BrowserRouter>
);

//스토리 구성 객체 기본 내보내기

const variants = mobile => ({
  visible: {
    color: colors.white,
    backgroundColor: colors.redMain,
    height: 'auto',
    opacity: 0.8,
    transition: { duration: 0.5, type: 'tween' }
  },
  hidden: {
    color: colors.black,
    backgroundColor: colors.white,
    height: mobile ? calcRem(37) : calcRem(46),
    opacity: 1,
    transition: { duration: 0.5, type: 'tween' }
  }
});

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
  },
  variant: variants
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
  },
  variant: variants
};
