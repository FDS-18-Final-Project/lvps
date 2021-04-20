/* eslint-disable import/no-anonymous-default-export */
import { colors } from 'theme/theme';
import GlobalStyle from 'styles/GlobalStyle';
import Review from './Review';

export default {
  title: 'LVPS/Component/Review',
  component: Review,
  parameters: {
    docs: {
      description: {
        component: 'content, color를 받아 Review 컴포넌트를 만들어줍니다.'
      }
    }
  },
  argTypes: {
    content: {
      control: {
        type: 'string'
      }
    },
    color: {
      control: {
        type: 'string'
      }
    }
  }
};

const reviews = {
  id: 1,
  name: 'ADEL GHQYEM',
  model: 'Mercedes Benz GLC300',
  review:
    'After buying my brand new car I wanted to protect it. I inquired with LVPS about Ceramic Coating. I got offered with a Ceramic Pro Silver package! I am very happy with the end results. My car looks like new after every car wash. Will definitely recommend LVPS services to everyone!'
};

//template 만들기
const Template = args => (
  <>
    <GlobalStyle />
    <Review {...args} />
  </>
);

//스토리 구성 객체 기본 내보내기
export const ReviewBlock = Template.bind({});

ReviewBlock.args = {
  content: reviews,
  colors: { main: colors.black, sub: colors.black }
};

ReviewBlock.storyName = '캐러셀 리뷰 아이템';
