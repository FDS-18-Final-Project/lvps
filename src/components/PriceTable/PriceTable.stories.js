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
    icon: {
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
  mode: 'list',
  maxWidth: 322
};

export const TitlePriceTable = Template.bind({});

TitlePriceTable.args = {
  mode: 'title',
  maxWidth: 322
};

const contents = [
  { id: 1, title: 'Nont-Metal /Fading' },
  { id: 2, title: 'Color Stable' },
  { id: 3, title: 'Dyed' }
];

export const IconPriceTable = Template.bind({});

IconPriceTable.args = {
  mode: 'title',
  icon: true,
  iconContents: contents,
  maxWidth: 322
};
