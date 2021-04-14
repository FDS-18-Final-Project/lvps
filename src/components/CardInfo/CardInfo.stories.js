import GlobalStyle from 'styles/GlobalStyle';
import CardInfo from './CardInfo';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'LVPS/Component/CardInfo',
  Component: CardInfo,
  parameters: {
    docs: {
      description: {
        component:
          '카드 설명을 렌더링하는 CardInfo 컴포넌트입니다. iconColor와 fgColor를 받을 수 있습니다.'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=34%3A68'
    }
  },
  argTypes: {
    iconColor: {
      description: '아이콘 색깔',
      control: {
        type: 'select',
        options: [
          'black',
          'white',
          'gray',
          'lightGray',
          'redMain',
          'red_01',
          'red_02',
          'red_03',
          'red_04',
          'red_05',
          'red_06'
        ]
      }
    },
    fgColor: {
      description: '폰트 색깔',
      control: {
        type: 'select',
        options: [
          'black',
          'white',
          'gray',
          'lightGray',
          'redMain',
          'red_01',
          'red_02',
          'red_03',
          'red_04',
          'red_05',
          'red_06'
        ]
      }
    }
  }
};

const Template = args => (
  <>
    <GlobalStyle />
    <CardInfo {...args} />
  </>
);

export const DefaultInfo = Template.bind({});
DefaultInfo.args = {
  iconColor: 'redMain',
  fgColor: 'black'
};

export const GrayInfo = Template.bind({});
GrayInfo.args = {
  iconColor: 'lightGray',
  fgColor: 'lightGray'
};
