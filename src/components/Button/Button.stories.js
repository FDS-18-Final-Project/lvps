import { Button } from 'components';

//스토리 구성 객체
export default {
  title: ' MMAuto/UI/button',
  components: Button,
  parameters: {
    docs: {
      description: {
        component: 'tag 선택에 따라 button 또는 a 요소로 변경되는 버튼 컴포넌트입니다.'
      }
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4-%EC%88%98%EC%A0%95?node-id=3%3A476'
    }
  },
  argTypes: {
    tag: {
      control: {
        type: 'select',
        options: ['button', 'a']
      }
    },
    type: { type: 'text' },
    mode: {
      control: {
        type: 'select',
        options: ['primary', 'secondary']
      }
    },
    disabled: { control: 'boolean' },
    children: { type: 'text' },
    role: { type: 'text' },
    href: { type: 'text' }
  }
};

const Template = args => <Button {...args}></Button>;

//스토리 구성 객체 기본 내보내기
export const PrimaryNormalButton = Template.bind({});

PrimaryNormalButton.args = {
  tag: 'button',
  type: 'button',
  mode: 'primary',
  disabled: false,
  children: 'Get a Free Quote'
};

export const PrimaryNormalAnchor = Template.bind({});

PrimaryNormalAnchor.args = {
  tag: 'a',
  mode: 'primary',
  role: 'button',
  href: '/',
  children: 'Get a Free Quote'
};

export const SecondaryNormalButton = Template.bind({});

SecondaryNormalButton.args = {
  tag: 'button',
  type: 'button',
  mode: 'secondary',
  disabled: false,
  children: 'Get a Free Quote'
};

export const SecondaryNormalAnchor = Template.bind({});

SecondaryNormalAnchor.args = {
  tag: 'a',
  mode: 'secondary',
  role: 'button',
  href: '/',
  children: 'Get a Free Quote'
};

export const SecondaryHoverButton = Template.bind({});

SecondaryHoverButton.args = {
  tag: 'button',
  type: 'button',
  mode: 'secondary',
  disabled: false,
  children: 'Get a Free Quote'
};

export const SecondaryHoverAnchor = Template.bind({});

SecondaryHoverAnchor.args = {
  tag: 'a',
  mode: 'secondary',
  role: 'button',
  href: '/',
  children: 'Get a Free Quote'
};
