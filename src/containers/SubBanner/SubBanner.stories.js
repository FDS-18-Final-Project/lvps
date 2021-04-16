/* eslint-disable import/no-anonymous-default-export */
import SubBanner from './SubBanner';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'LVPS/Container/SubBanner',
  component: SubBanner,
  parameters: {
    docs: {
      description: {
        component:
          '이미지와 링크가 있는 SubBanner 컨테이너입니다. title과 description, imagePath를 전달할 수 있고 children으로 linkText를 전달합니다'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=3%3A594'
    }
  }
};

//template 만들기
const Template = args => (
  <BrowserRouter>
    <SubBanner {...args} />
  </BrowserRouter>
);

//스토리 구성 객체 기본 내보내기
export const SubBannerBase = Template.bind({});

SubBanner.args = {
  title: 'About us',
  description: 'More About us',
  imagePath: 'assets/dummyImage.png',
  children: 'Quality Protection Services'
};
