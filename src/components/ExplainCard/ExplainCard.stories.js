import { ExplainCard } from 'components';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'LVPS/Component/ExplainCard',
  component: ExplainCard,
  decorators: [withDesign],
  parameters: {
    docs: {
      description: {
        component: '**ExplainCard** 컴포넌트는 정보를 효과적으로 보여줍니다'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=1739%3A18611'
    }
  },
  argTypes: {
    title: {
      control: {
        type: 'text'
      }
    },
    desc: {
      control: {
        type: 'text'
      }
    },
    infoList: {
      control: {
        type: 'object'
      }
    }
  }
};

const explainInfoList = [
  'Excellent Durability',
  'Easy to Clean',
  'Super Hydrophobic Effect',
  'Superior Wear Resistance',
  'UV Resistance',
  'Keeps Leather Soft',
  'Preserves Factory Look & Feel'
];
//template 만들기
const Template = args => <ExplainCard {...args}></ExplainCard>;

export const ExplainCardBlock = Template.bind({});

ExplainCardBlock.args = {
  title: 'CERAMIC PRO LEATHER',
  desc:
    'Ceramic Pro Leather will preserve the factory look and feel as it slows down the aging process. The coating will prevent contaminants from staining the substrate.',
  infoList: explainInfoList
};
