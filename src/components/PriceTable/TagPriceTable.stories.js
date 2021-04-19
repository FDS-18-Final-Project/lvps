import GlobalStyle from 'styles/GlobalStyle';
import TagPriceTable from './TagPriceTable';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'LVPS/Component/TagPriceTable',
  Component: TagPriceTable,
  parameters: {
    docs: {
      description: {
        component: '**TagPriceTable** 컴포넌트는 제목과 내용으로 구성됩니다.'
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
        options: [
          'tagGold',
          'tagSilver',
          'tagPlatinum',
          'tagBronze',
          'tagRed',
          'tagWhite'
        ]
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
    <TagPriceTable {...args} />
  </>
);

export const GoldTagPriceTable = Template.bind({});

GoldTagPriceTable.args = {
  type: 'tagGold',
  maxWidth: 322
};

export const SilverTagPriceTable = Template.bind({});

SilverTagPriceTable.args = {
  type: 'tagSilver',
  maxWidth: 322
};

export const RedTagPriceTable = Template.bind({});

RedTagPriceTable.args = {
  type: 'tagRed',
  mode: 'title',
  maxWidth: 322
};
