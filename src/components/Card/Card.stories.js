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
        type: 'text'
      }
    }
  }
};

const fakeData = [
  {
    id: 1,
    content: [
      {
        id: 1,
        content:
          ' Professional services & products offered to exceed your expectations'
      }
    ],
    iconType: 'likeCircle',
    fontColor: colors.white
  }
];

//template 만들기
const Template = args => <Card {...args}></Card>;

export const SqaureCard = Template.bind({});

SqaureCard.args = {
  content: fakeData[0].content[0],
  iconType: 'likeCircle',
  type: 'square',
  background: colors.black
};

export const ArrowCard = Template.bind({});

ArrowCard.args = {
  content: fakeData[0].content[0],
  iconType: 'likeCircle',
  type: 'arrow',
  background: colors.black
};
