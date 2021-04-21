/* eslint-disable import/no-anonymous-default-export */
import GlobalStyle from 'styles/GlobalStyle';
import CarouselItem from './CarouselItem';
import theme from 'theme/theme';
import PriceTable from 'components/PriceTable/PriceTable';

const { colors } = theme;

export default {
  title: 'LVPS/Component/CarouselItem',
  component: CarouselItem,
  parameters: {
    docs: {
      description: {
        component:
          'content, colors, active, type를 받아 CarouselItem 컴포넌트를 만들어줍니다.'
      }
    }
  },
  argTypes: {
    content: {
      control: {
        type: 'string'
      }
    },
    colors: {
      control: {
        type: 'string',
        options: { main: colors.lightGray, sub: colors.white }
      }
    },
    active: {
      control: {
        type: 'boolean'
      }
    }
  }
};

const carouselReview = {
  id: 1,
  name: 'ADEL GHQYEM',
  model: 'Mercedes Benz GLC300',
  star: 1,
  review:
    'After buying my brand new car I wanted to protect it. I inquired with LVPS about Ceramic Coating. I got offered with a Ceramic Pro Silver package! I am very happy with the end results. My car looks like new after every car wash. Will definitely recommend LVPS services to everyone!'
};

const carouselImg = {
  id: 1,
  path: 'assets/dummy_background.png'
};

const Template = args => (
  <>
    <GlobalStyle />
    <CarouselItem {...args} />
  </>
);

export const CarouselItemReview = Template.bind({});

CarouselItemReview.args = {
  type: 'paragraph',
  content: carouselReview,
  colors: { main: colors.black, sub: colors.white },
  active: true
};

CarouselItemReview.storyName = '캐러셀 리뷰 아이템';

export const CarouselItemImg = Template.bind({});

CarouselItemImg.args = {
  type: 'img',
  content: carouselImg,
  active: true
};

CarouselItemImg.storyName = '캐러셀 이미지 아이템';

export const CarouselCardItem = Template.bind({});

CarouselCardItem.args = {
  type: 'card',
  content: [<PriceTable />],
  active: true
};

CarouselCardItem.storyName = '캐러셀 카드 아이템';
