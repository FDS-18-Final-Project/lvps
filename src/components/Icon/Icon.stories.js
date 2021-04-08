import { Icon } from 'components';
import { ThemeProvider } from 'styled-components';
import theme from 'theme/theme';

export default {
  title: 'MMAuto/Component/Icon',
  Component: Icon,
  parameters: {
    docs: {
      description: {
        component: '**Icon** 컴포넌트는 아이콘 사용을 위한 컴포넌트 입니다..',
      },
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=34%3A68',
    },
  },
  argTypes: {
    type: {
      description: '아이콘 이름과 타입',
      control: {
        type: 'select',
        options: ['facebook', 'instagram', 'rightArrow', 'map'],
      },
    },
    color: {
      description: '아이콘 색',
    },
  },
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Icon {...args} />
  </ThemeProvider>
);

export const Facebook = Template.bind({});
Facebook.args = {
  type: 'facebook',
  color: 'red',
};

export const Instagram = Template.bind({});
Instagram.args = {
  type: 'instagram',
  color: 'red',
};

export const RightArrow = Template.bind({});
RightArrow.args = {
  type: 'rightArrow',
  color: 'red',
};
