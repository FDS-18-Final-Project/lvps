import GlobalStyle from 'styles/GlobalStyle';
import HelmetPriceTable from './HelmetPriceTable';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'LVPS/Component/HelmetPriceTable',
  Component: HelmetPriceTable,
  parameters: {
    docs: {
      description: {
        component: '**HelmetPriceTable** 컴포넌트는 제목과 내용으로 구성됩니다.'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=928%3A51057'
    }
  },
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['black', 'green', 'red_05']
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
    <HelmetPriceTable {...args} />
  </>
);

export const BlackHelmetPriceTable = Template.bind({});

BlackHelmetPriceTable.args = {
  color: 'black',
  maxWidth: 322
};

export const GreenHelmetPriceTable = Template.bind({});

GreenHelmetPriceTable.args = {
  color: 'green',
  maxWidth: 322
};

export const RedHelmetPriceTable = Template.bind({});

RedHelmetPriceTable.args = {
  color: 'red_05',
  mode: 'list',
  maxWidth: 322
};
