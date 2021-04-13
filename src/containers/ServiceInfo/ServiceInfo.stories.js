/* eslint-disable import/no-anonymous-default-export */
import ServiceInfo from './ServiceInfo';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from 'theme/theme';

export default {
  title: 'LVPS/Container/ServiceInfo',
  component: ServiceInfo,
  parameters: {
    docs: {
      description: {
        component:
          'ServiecInfo 컨테이너입니다. title과 subtitle, LinkText, imagePath를 전달할 수 있고 children으로 description을 전달합니다 mode에 right, left로 이미지 위치를 변경할 수 있습니다.'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=470%3A265'
    }
  },
  argTypes: {
    mode: {
      control: {
        type: 'radio',
        options: ['left', 'right']
      }
    }
  }
};

//template 만들기
const Template = args => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <ServiceInfo {...args} />
    </ThemeProvider>
  </BrowserRouter>
);

//스토리 구성 객체 기본 내보내기
export const ServiceInfoLeft = Template.bind({});

ServiceInfoLeft.args = {
  title: 'Ceramic Pro',
  subTitle: 'Meet Our Skilled Crew.',
  imagePath: 'assets/dummyCar.png',
  linkText: 'Read More',
  children:
    'LVPS operates in North York, Ontario. The major intersection is Dufferin St and Finch Ave W. Our goal is to provide our customers with the best quality services & products, and convenient automotive services experience possible. We use the most modern and up-to-date tools. Through our experience with working with many cars using different kind of products on the market, we chose our products that are the best in the industry for your car.',
  mode: 'left'
};

export const ServiceInfoRight = Template.bind({});

ServiceInfoRight.args = {
  title: 'Ceramic Pro',
  subTitle: 'Meet Our Skilled Crew.',
  imagePath: 'assets/dummyCar.png',
  linkText: 'Read More',
  children:
    'LVPS operates in North York, Ontario. The major intersection is Dufferin St and Finch Ave W. Our goal is to provide our customers with the best quality services & products, and convenient automotive services experience possible. We use the most modern and up-to-date tools. Through our experience with working with many cars using different kind of products on the market, we chose our products that are the best in the industry for your car.',
  mode: 'right'
};
