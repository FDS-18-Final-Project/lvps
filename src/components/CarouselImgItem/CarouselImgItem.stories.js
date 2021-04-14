/* eslint-disable import/no-anonymous-default-export */
import GlobalStyle from 'styles/GlobalStyle';
import CarouselImgItem from './CarouselImgItem';

export default {
  title: 'LVPS/Component/CarouselImgItem',
  component: CarouselImgItem,
  parameters: {
    docs: {
      description: {
        component: 'content를 받아 CarouselImgItem 컴포넌트를 만들어줍니다.'
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

const carouselImgs = [
  {
    id: 1,
    path: 'assets/dummy_background.png'
  },
  {
    id: 2,
    path: 'assets/dummy_background_02.png'
  },
  {
    id: 3,
    path: 'assets/dummyImage.png'
  },
  {
    id: 4,
    path: 'assets/dummy_ourbestservice.png'
  },
  {
    id: 5,
    path: 'assets/dummy_car1.png'
  }
];

//template 만들기
const Template = args => (
  <>
    <GlobalStyle />
    <CarouselImgItem {...args} />
  </>
);

//스토리 구성 객체 기본 내보내기
export const CarouselImgItemBlock = Template.bind({});

CarouselImgItemBlock.args = {
  content: carouselImgs[0]
};

CarouselImgItemBlock.storyName = '캐러셀 이미지 아이템';
