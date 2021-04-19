import GlobalStyle from 'styles/GlobalStyle';
import DescriptionPriceTable from './DescriptionPriceTable';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'LVPS/Component/DescriptionPriceTable',
  Component: DescriptionPriceTable,
  parameters: {
    docs: {
      description: {
        component:
          '**DescriptionPriceTable** 컴포넌트는 제목과 내용으로 구성됩니다.'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=928%3A51057'
    }
  },
  argTypes: {
    maxWidth: {
      control: { type: 'range', min: 200, max: 500, step: 10 }
    }
  }
};

const Template = args => (
  <>
    <GlobalStyle />
    <DescriptionPriceTable {...args} />
  </>
);

export const DefaultDescriptionPriceTable = Template.bind({});
