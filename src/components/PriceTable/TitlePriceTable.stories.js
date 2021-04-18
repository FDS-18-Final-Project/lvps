import GlobalStyle from 'styles/GlobalStyle';
import TitlePriceTable from './TitlePriceTable';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'LVPS/Component/TitlePriceTable',
  Component: TitlePriceTable,
  parameters: {
    docs: {
      description: {
        component:
          '**TagPriTitlePriceTableceTable** 컴포넌트는 제목과 내용으로 구성됩니다.'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=928%3A51057'
    }
  },
  argTypes: {
    priceColor: {
      control: {
        type: 'select',
        options: ['green', 'pink']
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
    <TitlePriceTable {...args} />
  </>
);

export const GreenTitlePriceTable = Template.bind({});

GreenTitlePriceTable.args = {
  priceColor: 'green',
  maxWidth: 322
};

export const PinkTitlePriceTable = Template.bind({});

PinkTitlePriceTable.args = {
  priceColor: 'pink',
  maxWidth: 322
};
