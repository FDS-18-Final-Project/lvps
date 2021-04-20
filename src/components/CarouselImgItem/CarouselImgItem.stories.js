/* eslint-disable import/no-anonymous-default-export */
import GlobalStyle from 'styles/GlobalStyle';
import CarouselImgItem from './CarouselImgItem';

export default {
  title: 'LVPS/Component/CarouselImgItem',
  component: CarouselImgItem,
  parameters: {
    docs: {
      description: {
        component: 'img를 받아 CarouselImgItem 컴포넌트를 만들어줍니다.'
      }
    }
  },
  argTypes: {
    content: {
      control: {
        type: 'string'
      }
    }
  }
};

const carouselImg = {
  id: 1,
  path: 'assets/dummy_background.png'
};

const Template = args => (
  <>
    <GlobalStyle />
    <CarouselImgItem {...args} />
  </>
);

export const CarouselImgItemBlock = Template.bind({});

CarouselImgItemBlock.args = {
  content: carouselImg
};

CarouselImgItemBlock.storyName = '캐러셀 이미지 아이템';
