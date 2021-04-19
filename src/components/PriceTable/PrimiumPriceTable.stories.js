import GlobalStyle from 'styles/GlobalStyle';
import PrimiumPriceTable from './PrimiumPriceTable';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'LVPS/Component/PrimiumPriceTable',
  Component: PrimiumPriceTable,
  parameters: {
    docs: {
      description: {
        component:
          '**PrimiumPriceTable** 컴포넌트는 제목과 내용으로 구성됩니다.'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=928%3A51057'
    }
  },
  argTypes: {
    option: {
      control: {
        type: 'select',
        options: ['Gold', 'Silver', 'Platinum', 'Bronze']
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
    <PrimiumPriceTable {...args} />
  </>
);

export const GoldPrimiumPriceTable = Template.bind({});

GoldPrimiumPriceTable.args = {
  option: 'Gold',
  maxWidth: 322
};

export const SilverPrimiumPriceTable = Template.bind({});

SilverPrimiumPriceTable.args = {
  option: 'Silver',
  maxWidth: 322
};

export const PlatinumPrimiumPriceTable = Template.bind({});

PlatinumPrimiumPriceTable.args = {
  option: 'Platinum',
  mode: 'list',
  maxWidth: 322
};
