import Icon from './Icon';

export default {
  title: 'MMAuto/UI/Icon',
  Component: Icon,
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=34%3A68',
    },
  },
  argTypes: {
    type: {
      description: '로고 이름과 타입(스크린 리더에서 읽힘)',
      control: {
        type: 'select',
        options: ['facebook', 'instagram', 'more'],
      },
    },
    color: {
      description: '로고색',
      control: {
        type: 'select',
        options: ['red', 'blue', 'orange'],
      },
    },
  },
};

const Template = (args) => <Icon {...args} />;

export const Facebook = Template.bind({});
Facebook.args = {
  type: 'facebook',
  // TODO: theme 색상 정해서 main 등으로 바꾸기
  color: 'red',
};

export const Instagram = Template.bind({});
Instagram.args = {
  type: 'instagram',
  color: 'red',
};

export const More = Template.bind({});
More.args = {
  type: 'more',
  color: 'red',
};
