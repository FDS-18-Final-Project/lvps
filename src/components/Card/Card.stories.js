import { Card } from 'components';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'MMAuto/Component/Card',
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
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=21%3A353'
    }
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['process', 'quality']
      }
    },
    iconType: {
      control: {
        type: 'select',
        options: ['checkedCar', 'clickHand']
      }
    }
  }
};

//template 만들기
const Template = args => <Card {...args}></Card>;

//스토리 구성 객체 기본 내보내기
export const ProcessCard = Template.bind({});

ProcessCard.args = {
  children: 'Multiple services at a great value',
  iconType: 'clickHand',
  type: 'process'
};

export const QualityCard = Template.bind({});

QualityCard.args = {
  children: 'Multiple services at a great value Multiple services at a great value',
  iconType: 'checkedCar',
  type: 'quality'
};
