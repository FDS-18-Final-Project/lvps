import { Card } from 'components';
import { withDesign } from 'storybook-addon-designs';
import { colors } from 'theme/theme';

export default {
  title: 'LVPS/Component/Card',
  component: Card,
  decorators: [withDesign],
  parameters: {
    docs: {
      description: {
        component: '**카드** 컴포넌트는 정보를 효과적으로 보여줍니다'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=855%3A4181'
    }
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['arrow', 'square']
      }
    },
    iconType: {
      control: {
        type: 'select',
        options: ['goodWork', 'clickHand']
      }
    }
  }
};

//template 만들기
const Template = args => <Card {...args}></Card>;

//스토리 구성 객체 기본 내보내기
export const ArrowCard = Template.bind({});

ArrowCard.args = {
  children: 'Multiple services at a great value',
  iconType: 'goodWork',
  type: 'arrow',
  background: colors.redMain,
  color: colors.white
};

export const PinkType1ArrowCard = Template.bind({});

PinkType1ArrowCard.args = {
  children: 'Booking Appointment',
  iconType: 'goodWork',
  type: 'arrow',
  background: colors.red_01,
  color: colors.white
};

export const PinkType2ArrowCard = Template.bind({});

PinkType2ArrowCard.args = {
  children: 'Inspection of the car',
  iconType: 'goodWork',
  type: 'arrow',
  background: colors.red_02,
  color: colors.white
};

export const PinkType3ArrowCard = Template.bind({});

PinkType3ArrowCard.args = {
  children: 'Valuation of services',
  iconType: 'goodWork',
  type: 'arrow',
  background: colors.red_03,
  color: colors.white
};

export const PinkType4ArrowCard = Template.bind({});

PinkType4ArrowCard.args = {
  children: 'Completion',
  iconType: 'goodWork',
  type: 'arrow',
  background: colors.redMain,
  color: colors.white
};

export const SqaureCard = Template.bind({});

SqaureCard.args = {
  children:
    'Multiple services at a great value Multiple services at a great value',
  iconType: 'goodWork',
  type: 'square',
  background: colors.redMain,
  color: colors.white
};
