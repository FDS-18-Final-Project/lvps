/* eslint-disable import/no-anonymous-default-export */
import ServiceMainBanner from './ServiceMainBanner';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'LVPS/Container/ServiceMainBanner',
  component: ServiceMainBanner,
  parameters: {
    docs: {
      description: {
        component:
          'ServiceMainBanner 컨테이너입니다. title과 imagePath를 전달할 수 있고 children으로 description을 전달합니다.'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=832%3A6403'
    }
  }
};

//template 만들기
const Template = args => (
  <BrowserRouter>
    <ServiceMainBanner {...args} />
  </BrowserRouter>
);

//스토리 구성 객체 기본 내보내기
export const DefaultServiceMainBanner = Template.bind({});

DefaultServiceMainBanner.args = {
  title: 'What Is Ceramic Pro?',
  imagePath: 'assets/dummy_ceramicpro.png',
  children:
    'LVPS operates in North York, Ontario. The major intersection is Dufferin St and Finch Ave W. Our goal is to provide our customers with the best quality services & products, and convenient automotive services experience possible. We use the most modern and up-to-date tools. Through our experience with working with many cars using different kind of products on the market, we chose our products that are the best in the industry for your car.'
};
