import GlobalStyle from 'styles/GlobalStyle';
import { colors } from 'theme/theme';
import CardExplanation from './CardExplanation';

export default {
  title: 'LVPS/Container/CardExplanation',
  component: CardExplanation,
  parameters: {
    docs: {
      description: {
        component:
          '**CardExplanation** 컨테이너는 Card로 정보전달을 목적으로한 컨테이너 입니다.'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=969%3A15780'
    }
  },
  argTypes: {
    title: {
      description: '카드 설명 컨테이너 타이틀',
      type: 'string'
    },
    desc: {
      description: '카드 설명 컨테이너 내용',
      type: 'string'
    }
  }
};

const CardList = [
  {
    id: 1,
    type: 'square',
    content: [
      {
        id: 1,
        content:
          'Professional services & products offered to exceed your expectations.'
      }
    ],
    iconType: 'likeCircle',
    background: colors.redMain,
    fontColor: colors.white
  },
  {
    id: 2,
    type: 'square',
    content: [
      { id: 1, content: 'Certified Professional & Trained Installers' }
    ],
    iconType: 'likeCircle',
    background: colors.redMain,
    fontColor: colors.white
  },
  {
    id: 3,
    type: 'square',
    content: [{ id: 1, content: '100% Satisfaction Guaranteed' }],
    iconType: 'likeCircle',
    background: colors.redMain,
    fontColor: colors.white
  },
  {
    id: 4,
    type: 'square',
    content: [{ id: 1, content: 'We work with every make & model' }],
    iconType: 'likeCircle',
    background: colors.redMain,
    fontColor: colors.white
  },
  {
    id: 5,
    type: 'square',
    content: [{ id: 1, content: 'Pick up & delivery service available' }],
    iconType: 'likeCircle',
    background: colors.redMain,
    fontColor: colors.white
  },
  {
    id: 6,
    type: 'square',
    content: [{ id: 1, content: 'Mobile services on request' }],
    iconType: 'likeCircle',
    background: colors.redMain,
    fontColor: colors.white
  }
];

const Template = args => (
  <>
    <GlobalStyle />
    <CardExplanation {...args} />
  </>
);

export const CardExplanationType1Container = Template.bind({});

CardExplanationType1Container.args = {
  title: 'Our Quality Protection Services',
  desc: 'Why choose us?',
  cardList: CardList
};

export const CardExplanationType2Container = Template.bind({});

CardExplanationType2Container.args = {
  title: 'Luxury Vehicle Protection Services',
  desc: 'Why choose us?',
  cardList: CardList,
  children:
    'LVPS operates in North York, Ontario. The major intersection is Dufferin St and Finch Ave W. Our goal is to provide our customers with the best quality services & products, and convenient automotive services experience possible. We use the most modern and up-to-date tools. Through our experience with working with many cars using different kind of products on the market, we chose our products that are the best in the industry for your car.'
};
