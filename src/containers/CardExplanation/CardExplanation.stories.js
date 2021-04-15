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
    type: {
      description: '카드 설명 컨테이너 타입',
      control: {
        type: 'select',
        options: ['type1', 'type2', 'type3']
      }
    }
  }
};

const Type1CardList = [
  {
    id: 1,
    type: 'arrow',
    desc: 'Booking Appointment',
    iconType: 'goodWork',
    background: colors.red_01,
    fontColor: colors.white
  },
  {
    id: 2,
    type: 'arrow',
    desc: 'Inspection of the car',
    iconType: 'goodWork',
    background: colors.red_02,
    fontColor: colors.white
  },
  {
    id: 3,
    type: 'arrow',
    desc: 'Valuation of the Services',
    iconType: 'goodWork',
    background: colors.red_03,
    fontColor: colors.white
  },
  {
    id: 4,
    type: 'arrow',
    desc: 'Completion',
    iconType: 'goodWork',
    background: colors.red_04,
    fontColor: colors.white
  }
];

const Type2CardList = [
  {
    id: 1,
    type: 'square',
    desc: 'Multiple services at a great value',
    iconType: 'goodWork',
    background: colors.redMain,
    fontColor: colors.white
  },
  {
    id: 2,
    type: 'square',
    desc: 'Top-quality automotive products',
    iconType: 'goodWork',
    background: colors.redMain,
    fontColor: colors.white
  },
  {
    id: 3,
    type: 'square',
    desc: 'Trained and skilled car protection installers',
    iconType: 'goodWork',
    background: colors.redMain,
    fontColor: colors.white
  },
  {
    id: 4,
    type: 'square',
    desc: 'High attention to details',
    iconType: 'goodWork',
    background: colors.redMain,
    fontColor: colors.white
  }
];

const Type3CardList = [
  {
    id: 1,
    type: 'square',
    desc: 'Multiple services at a great value',
    iconType: 'goodWork',
    background: colors.redMain,
    fontColor: colors.white
  },
  {
    id: 2,
    type: 'square',
    desc: 'Top-quality automotive products',
    iconType: 'goodWork',
    background: colors.redMain,
    fontColor: colors.white
  },
  {
    id: 3,
    type: 'square',
    desc: 'Trained and skilled car protection installers',
    iconType: 'goodWork',
    background: colors.redMain,
    fontColor: colors.white
  },
  {
    id: 4,
    type: 'square',
    desc: 'High attention to details',
    iconType: 'goodWork',
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
  title: 'LVPS Process',
  CardList: Type1CardList
};

export const CardExplanationType2Container = Template.bind({});

CardExplanationType2Container.args = {
  title: 'Our Quality Protection Services',
  desc: 'Meet Our Skilled Crew.',
  CardList: Type2CardList
};

export const CardExplanationType3Container = Template.bind({});

CardExplanationType3Container.args = {
  title: 'Luxury Vehicle Protection Services',
  desc: 'Car protection & correction service',
  CardList: Type3CardList,
  children:
    'LVPS operates in North York, Ontario. The major intersection is Dufferin St and Finch Ave W. Our goal is to provide our customers with the best quality services & products, and convenient automotive services experience possible. We use the most modern and up-to-date tools. Through our experience with working with many cars using different kind of products on the market, we chose our products that are the best in the industry for your car.'
};
