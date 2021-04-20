import GlobalStyle from 'styles/GlobalStyle';
import ChooseUs from './ChooseUs';

export default {
  title: 'LVPS/Container/ChooseUs',
  component: ChooseUs,
  parameters: {
    docs: {
      description: {
        component:
          '**ChooseUs** 컨테이너는 Contact us 페이지의 클라이언트 연락 정보가 담긴 컨테이너 입니다.'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/EKoyu2bLwgDjnAIHQrCwn9/LVPS-Renewal?node-id=281%3A6457'
    }
  },
  argTypes: {
    title: {
      type: 'string'
    },
    children: {
      type: 'string'
    }
  }
};

const Template = args => (
  <>
    <GlobalStyle />
    <ChooseUs {...args} />
  </>
);

export const ChooseUsContainer = Template.bind({});

ChooseUsContainer.args = {
  title: 'Why Choose Us?',
  children:
    'By professionally installing products of the highest quality, we value the services that are offered to our clients. Installation is guaranteed on products and services for any make and/or model. We are a certified installer for services such as Ceramic Pro, IGL Ceramic Coating, and Xpel.'
};
