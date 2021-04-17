import GlobalStyle from 'styles/GlobalStyle';
import PriceCard from './PriceCard';

export default {
  title: 'LVPS/Container/PriceCard',
  component: PriceCard,
  parameters: {
    docs: {
      description: {
        component:
          '**PriceCard** 컨테이너는 Ceramic Coating page의 한 section 입니다.'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=34%3A68'
    }
  }
};

const Template = args => (
  <>
    <GlobalStyle />
    <PriceCard {...args} />
  </>
);

export const PriceCardBlock = Template.bind({});

PriceCardBlock.args = {};

PriceCardBlock.storyName = 'PriceCard Section';
