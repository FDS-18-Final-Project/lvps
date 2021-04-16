import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyle';
import IconExplanCard from './IconExplanCard';

//스토리 구성 객체
export default {
  title: ' LVPS/Container/IconExplanCard',
  components: IconExplanCard,
  parameters: {
    docs: {
      description: {
        component: '아이콘 설명 카드 컨테이너 입니다.'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4-%EC%88%98%EC%A0%95?node-id=12%3A356'
    }
  }
};

const Template = args => (
  <BrowserRouter>
    <GlobalStyle />
    <IconExplanCard {...args}></IconExplanCard>
  </BrowserRouter>
);

export const IconExplanCardBlock = Template.bind({});

IconExplanCardBlock.args = {
  children: [<IconExplanCard.Title />, <IconExplanCard.Contents />]
};

IconExplanCardBlock.storyName = '아이콘 설명 카드 컨테이너';
