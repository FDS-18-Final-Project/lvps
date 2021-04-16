import GlobalStyle from 'styles/GlobalStyle';
import PriceTable from './PriceTable';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'LVPS/Component/PriceTable',
  Component: PriceTable,
  parameters: {
    docs: {
      description: {
        component: '**PriceTable** 컴포넌트는 제목과 내용으로 구성됩니다.'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=928%3A51057'
    }
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['list', 'title']
      }
    },
    tagType: {
      description: 'Tag의 타입 지정',
      control: {
        type: 'select',
        options: [
          'tagGold',
          'tagSilver',
          'tagBronze',
          'tagPlatinum',
          'tagRed',
          'tagWhite'
        ]
      }
    },
    icon: {
      control: {
        type: 'boolean'
      }
    },
    modal: {
      control: {
        type: 'boolean'
      }
    },
    maxWidth: {
      control: { type: 'range', min: 200, max: 500, step: 10 }
    }
  }
};

const Template = args => (
  <>
    <GlobalStyle />
    <PriceTable {...args} />
  </>
);

export const ListPriceTable = Template.bind({});

ListPriceTable.args = {
  type: 'list',
  maxWidth: 322,
  tagType: 'tagGold',
  tagText: 'Gold',
  price: 4500,
  hover: true
};

export const TitlePriceTable = Template.bind({});

TitlePriceTable.args = {
  type: 'title',
  maxWidth: 322,
  tagType: 'tagSilver',
  tagText: 'Gold',
  price: 4500,
  hover: false
};

export const IconPriceTable = Template.bind({});

IconPriceTable.args = {
  type: 'title',
  icon: true,
  maxWidth: 322,
  tagType: 'tagSilver',
  tagText: 'Gold',
  price: 4500,
  hover: false
};
