import SubMainBanner from './SubMainBanner';

//스토리 구성 객체
export default {
  title: 'LVPS/Container/SubMainBanner',
  components: SubMainBanner,
  parameters: {
    docs: {
      description: {
        component: '서브 페이지 SubMainBanner 컴포넌트입니다.'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4-%EC%88%98%EC%A0%95?node-id=12%3A356'
    }
  },
  argTypes: {
    bgImg: { type: 'text' },
    title: { type: 'text' },
    desc: { type: 'text' }
  }
};

const Template = args => <SubMainBanner {...args}></SubMainBanner>;

//스토리 구성 객체 기본 내보내기
export const BannerAboutUs = Template.bind({});

BannerAboutUs.args = {
  bgImg: '/assets/dummyImage.png',
  title: 'About Us',
  desc: 'MM Auto Care For Your Car'
};
